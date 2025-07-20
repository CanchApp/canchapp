import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ActionEnum, ApiEnum, BrowserComponent, BrowserIdEnum, CommonsLibService, SelectIdEnum, TypeWebSocketEnum, WebSocketService } from 'commons-lib';
import { EventDTO } from '../../models/event.model';
import { Subscription } from 'rxjs';
import { BookingService } from '../../services/booking.service';
import { DetailValueCourtDTO, ValueCourtDTO } from '../../models/valueCourt.interface';
import { CustomerQuickDTO } from '../../models/customerQuick.interface';
import { NgxMaskDirective, NgxMaskService, provideNgxMask } from 'ngx-mask';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-event',
    imports: [CommonModule, RouterModule, TranslateModule, ReactiveFormsModule, BrowserComponent, NgxMaskDirective],
    providers: [provideNgxMask()],
    templateUrl: './event.component.html',
    styleUrl: './event.component.css'
})

export class EventComponent implements OnInit, OnChanges, OnDestroy {
  
  private readonly subscription: Subscription[] = [];
  public formEvent: FormGroup = new FormGroup({});
  msgSave: string = '';
  browserId: BrowserIdEnum;
  selectId: SelectIdEnum;
  eventEdit: EventDTO = new EventDTO();  

  @Input() actionState: ActionEnum = ActionEnum.None;
  @Output() onAddCustomer = new EventEmitter<boolean>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly bookingService: BookingService,
    private readonly commonsLibService: CommonsLibService,
    private readonly maskPipe: NgxMaskService,
    private readonly wsService: WebSocketService) {

      const apiUrl: string = ApiEnum.Court;
      this.wsService.connect(apiUrl, TypeWebSocketEnum.SaveCourt).subscribe(data => {
        if(data == this.eventEdit.court.id) {
          this.getPrice();
        }
      });

      this.browserId = BrowserIdEnum.BrowserCustomer;
      this.selectId = SelectIdEnum.ListCourt;

      this.maskPipe.prefix = '$ ';
      this.maskPipe.thousandSeparator = '.';
      this.maskPipe.decimalMarker = ',';
  }

  ngOnInit(): void {

    this.formEvent = this.formBuilder.group({
      dateTimeStart: [''],
      dateTimeEnd: [''],
      dateTimeStartNew: [''],
      dateTimeEndNew: [''],
      timeStart: ['', [Validators.required]],
      timeEnd: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      court: [],
      isRecurrent: [false],
      observation: [''],
      paymentType: ['0'],
      valueCourt: ['0'],
      totalValue: ['0'],
      totalHours: [0],
      detailValueCourt: this.formBuilder.array([]),
      totalValueManual: [0, [Validators.min(0)]],
    });
  }

  get detailValueCourtData(): DetailValueCourtDTO[] {
    return this.formEvent.get('detailValueCourt')?.value ?? [];
  }

  paymentTypeValidator(control: AbstractControl): ValidationErrors | null {
    return control.value && control.value !== '0' ? null : { invalidPaymentType: true };
  }

  private formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['actionState']) {
      this.handleActionStateChange(changes['actionState'].currentValue);
    }    
  }

  private handleActionStateChange(actionState: ActionEnum): void {
    this.formEvent.enable();
    if (this.actionState == ActionEnum.Edit) {
      this.formEvent.disable();
      this.formEvent.controls['observation'].enable();
      this.formEvent.controls['timeStart'].enable();
      this.formEvent.controls['timeEnd'].enable();
    }
  }

  get autocompleteCustomer(): FormControl {
    return this.formEvent.get('customer') as FormControl;
  }

  get selectCourt(): FormControl {
    return this.formEvent.get('court') as FormControl;
  }

  getEvent(isDelete: boolean = false): EventDTO | null {

    let eventTmp: EventDTO = this.formEvent.getRawValue() as EventDTO;
    eventTmp.idBooking = this.eventEdit.idBooking;

    if(isDelete)
      return eventTmp;

    this.formEvent.markAllAsTouched();
    if(this.formEvent.valid) {
            
      eventTmp.paymentType = Number(eventTmp.paymentType);
      if(this.actionState == ActionEnum.Edit) {

        eventTmp.dateTimeStart = this.commonsLibService.getFormatIsoDate(eventTmp.dateTimeStartNew, eventTmp.timeStart);
        eventTmp.dateTimeEnd = this.commonsLibService.getFormatIsoDate(eventTmp.dateTimeEndNew, eventTmp.timeEnd);

      }
      return eventTmp;
    }
    return null;
  }

  loadEvent(event: EventDTO): void {
    this.eventEdit = event;
    
    if(this.eventEdit.idBooking > 0) {
      let valueCourtEdit: ValueCourtDTO = {
        valueCourt: this.eventEdit.valueCourt,
        total: this.eventEdit.totalValue,
        totalHours: this.eventEdit.totalHours,
        detailValueCourt: typeof this.eventEdit.detailValueCourt === 'string'
          ? JSON.parse(this.eventEdit.detailValueCourt)
          : (this.eventEdit.detailValueCourt || [])
      };
      this.setPrice(valueCourtEdit);
    } else {
      this.getPrice();
    }
    this.formEvent.patchValue(event);
    const formattedStartTime = this.formatTime(new Date(this.eventEdit.dateTimeStartNew));
    const formattedEndTime = this.formatTime(new Date(this.eventEdit.dateTimeEndNew));
    this.formEvent.get('timeStart')?.setValue(formattedStartTime);
    this.formEvent.get('timeEnd')?.setValue(formattedEndTime);

    if(this.eventEdit.idBooking > 0) {
      this.formEvent.get('paymentType')?.setValidators([this.paymentTypeValidator]);
      this.formEvent.get('paymentType')?.updateValueAndValidity();
    } else {
      this.formEvent.get('paymentType')?.clearValidators();
      this.formEvent.get('paymentType')?.updateValueAndValidity();
    } 
  }

  setPrice(data: ValueCourtDTO): void {
    this.formEvent.setControl('detailValueCourt', this.formBuilder.array([]));
    this.formEvent.controls['valueCourt'].setValue(data.valueCourt);
    this.formEvent.controls['totalValue'].setValue(data.total);
    this.formEvent.controls['totalHours'].setValue(data.totalHours);

    if(data.detailValueCourt && data.detailValueCourt.length > 0)
    {
      this.eventEdit.totalValue = data.valueCourt;
      this.formEvent.setControl('detailValueCourt',
      this.formBuilder.array(
          data.detailValueCourt.map(d => this.formBuilder.group({
            timeStart: [d.timeStart],
            timeEnd: [d.timeEnd],
            value: [d.value],
          }))
        )
      );
    }
    else
    {
      this.eventEdit.valueCourt = data.valueCourt;
      this.eventEdit.totalValue = data.total;
    }
  }

  getPrice(): void {
    const timeStart = this.commonsLibService.getTime(this.eventEdit.dateTimeStart);
    let timeEnd = this.commonsLibService.getTime(this.eventEdit.dateTimeEnd);

    if(timeEnd == '00:00:00') {
      timeEnd = '23:59:59'; // Si es medianoche, lo cambiamos a 23:59:59
    }

    this.subscription.push(this.bookingService.getCourtValue(this.eventEdit.day, timeStart, timeEnd, this.eventEdit.court.id).subscribe({
      next: (data: ValueCourtDTO) => {
        this.setPrice(data);
      },
      error: (error) => {
        console.error(error);
      }
    }));
  }

  clicItemSelected(item: any) {
    this.onAddCustomer.emit(true);
  }

  setCustomer(customer: CustomerQuickDTO): void {
    this.formEvent.controls['customer'].setValue({ id: customer.idCustomer, text: customer.name, args: customer });
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
    this.wsService.disconnect(ApiEnum.Court);
  }

}
