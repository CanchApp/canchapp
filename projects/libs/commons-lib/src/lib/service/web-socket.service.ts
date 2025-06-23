import { Injectable, OnDestroy } from '@angular/core';
import { filter, map, Observable, share, Subject } from 'rxjs';
import { TypeWebSocketEnum } from '../enum/commons.enum';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService implements OnDestroy {
  private readonly sockets = new Map<string, WebSocket>();
  private readonly subjects = new Map<string, Subject<any>>();
  private readonly reconnectAttempts = 3;

  connectConfig(url: string): Observable<any> {
    if (this.sockets.has(url)) {
      return this.subjects.get(url)!.asObservable();
    }

    const subject = new Subject<any>();
    this.subjects.set(url, subject);

    const createConnection = (attempt = 0) => {
      const socket = new WebSocket(url);
      this.sockets.set(url, socket);

      socket.onopen = () => {
        console.log(`✅ WebSocket conectado a ${url}`);
      };

      socket.onmessage = (event) => {
        subject.next(JSON.parse(event.data));
      };

      socket.onerror = (error) => {
        console.error(`❌ Error en WebSocket (${url}):`, error);
      };

      socket.onclose = () => {
        console.warn(`🔌 WebSocket cerrado (${url}). Intentando reconectar...`);

        this.sockets.delete(url);

        if (attempt < this.reconnectAttempts) {
          setTimeout(() => createConnection(attempt + 1), 2000);
        } else {
          console.error(`❗ No se pudo reconectar a ${url} después de ${this.reconnectAttempts} intentos.`);
          subject.complete();
          this.subjects.delete(url);
        }
      };
    };

    createConnection();

    return subject.asObservable();
  }

  /**
   * Escucha solo mensajes de cierto tipo dentro de una conexión WebSocket compartida.
   */
  connect(url: string, type: TypeWebSocketEnum): Observable<any> {
    url = `${url}ws`;
    return this.connectConfig(url).pipe(
      filter((msg: any) => msg?.type === type),
      map((msg) => msg.response),
      share() // comparte la misma suscripción entre múltiples observadores
    );
  }

  send(url: string, data: any): void {
    const socket = this.sockets.get(url);
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(data));
    } else {
      console.warn(`⚠️ WebSocket no conectado para ${url}`);
    }
  }

  disconnect(url: string): void {
    const socket = this.sockets.get(url);
    if (socket) {
      socket.close();
      this.sockets.delete(url);
      this.subjects.delete(url);
    }
  }

  ngOnDestroy(): void {
    this.sockets.forEach((socket) => socket.close());
    this.sockets.clear();
    this.subjects.clear();
  }
}
