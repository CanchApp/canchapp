import { CommonModule } from '@angular/common';
import {
  OnInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-location-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.css']
})
export class LocationPickerComponent implements OnChanges, OnInit {

  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;

  @Input() initialLocation: { lat: number; lng: number; } | null = null;

  @Output() locationChange = new EventEmitter<{ lat: number; lng: number; }>();

  map!: google.maps.Map;
  marker!: google.maps.Marker;
  private isInitializing = false;

  // Estado interno reactivo
  selectedLocation = signal<{ lat: number; lng: number; }>({
    lat: 0,
    lng: 0,
  });
  
  ngOnInit(): void {
    this.initMap(this.initialLocation);    
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Solo actualizar si el mapa ya está inicializado y no estamos en medio de una inicialización
    if (changes['initialLocation'] && this.map && this.initialLocation && !this.isInitializing) {
      // Verificar si las coordenadas son diferentes a las actuales
      const current = this.selectedLocation();
      if (current.lat !== this.initialLocation.lat || current.lng !== this.initialLocation.lng) {
        this.setMarker(this.initialLocation.lat, this.initialLocation.lng);
        this.updateLocation(this.initialLocation.lat, this.initialLocation.lng, false);
      }
    }
  }

  /** Inicializa el mapa y eventos */
  initMap(location: { lat: number; lng: number } | null): void {
    this.isInitializing = true;
    
    const defaultLocation = location ?? { lat: 4.711, lng: -74.0721 };

    // Crear mapa
    this.map = new google.maps.Map(this.mapContainer.nativeElement, {
      center: defaultLocation,
      zoom: 14,
    });

    // Crear marcador inicial
    this.setMarker(defaultLocation.lat, defaultLocation.lng);
    this.updateLocation(defaultLocation.lat, defaultLocation.lng, false);

    // Permitir arrastrar marcador
    this.marker.addListener('dragend', () => {
      const position = this.marker.getPosition();
      if (position) {
        this.updateLocation(position.lat(), position.lng(), true);
      }
    });

    // Detectar clics en el mapa
    this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
      if (!event.latLng) return;
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      this.marker.setPosition({ lat, lng });
      this.map.panTo({ lat, lng });
      this.updateLocation(lat, lng, true);
    });

    // Activar buscador
    this.initAutocomplete();
    
    this.isInitializing = false;
  }

  /** Autocompletado de direcciones con Places API */
  initAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.searchInput.nativeElement,
      { types: ['geocode'] }
    );

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      if (!place.geometry?.location) {
        console.warn('No se encontraron coordenadas para el lugar seleccionado.');
        return;
      }

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      this.map.setCenter({ lat, lng });
      this.marker.setPosition({ lat, lng });
      this.updateLocation(lat, lng, true);
    });
  }

  /** Actualiza coordenadas y dirección seleccionada */
  updateLocation(lat: number, lng: number, emitEvent: boolean = true) {
    // Actualizar el signal inmediatamente
    this.selectedLocation.set({ lat, lng });
    
    if (emitEvent) {
      this.locationChange.emit({ lat, lng });
    }

    // Hacer reverse geocoding solo para obtener información adicional
    // pero no para actualizar las coordenadas principales
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        // console.log('Dirección encontrada:', results[0].formatted_address);
        // Aquí podrías actualizar un signal adicional para la dirección si lo necesitas
      }
    });
  }

  /** Coloca o actualiza el marcador */
  private setMarker(lat: number, lng: number): void {
    if (this.marker) {
      this.marker.setMap(null);
    }

    this.marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
      draggable: true,
    });

    this.map.setCenter({ lat, lng });
  }
}