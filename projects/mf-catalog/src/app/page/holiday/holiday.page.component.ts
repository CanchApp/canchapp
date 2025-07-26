import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HolidayDTO } from '../../models/holiday.model';
import { Subscription } from 'rxjs';
import { HolidayService } from '../../services/holiday.service';
import { CodeErrorEnum, NotificationService } from 'commons-lib';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

declare let bootstrap: any;

@Component({
  selector: 'app-holiday.page',
  imports: [TranslateModule, CommonModule, ReactiveFormsModule],
  templateUrl: './holiday.page.component.html',
  styleUrl: './holiday.page.component.css'
})
export class HolidayPageComponent implements OnInit, AfterViewInit {

  private readonly subscription: Subscription = new Subscription();

  @ViewChild('holidayModal', { static: true}) holidayModal!: ElementRef;
  @ViewChild('deleteModal', { static: true}) deleteModal!: ElementRef;

  public formHoliday: FormGroup = new FormGroup({});
  listHolidays: HolidayDTO[] | undefined;
  holidaySelected: HolidayDTO | undefined;

  modalHoliday: any;
  modalDelete: any;

  constructor(
    public translate: TranslateService,
    private readonly holidayService: HolidayService,
    private readonly formBuilder: FormBuilder,
    private readonly notificationService: NotificationService) { }

  ngOnInit(): void {

    this.formHoliday = this.formBuilder.group({
      idHoliday: [],
      day: [new Date(), [Validators.required]],
      isEveryYear: [false]
    });

    this.loadHolidays();
  }

  ngAfterViewInit(): void {
    this.modalHoliday = new bootstrap.Modal(this.holidayModal.nativeElement);
    this.modalDelete = new bootstrap.Modal(this.deleteModal.nativeElement);
  }

  loadHolidays(): void {
    this.subscription.add(
      this.holidayService.getAll().subscribe((holidays: HolidayDTO[]) => {
        this.listHolidays = [];
        this.listHolidays = holidays;
    }));
  }

  saveHoliday(): void { 
    if(this.formHoliday.valid) {
      let holidayTmp: HolidayDTO = this.formHoliday.value;

      this.holidayService.create(holidayTmp).subscribe({
        next: (holiday: HolidayDTO) => {    
          this.loadHolidays();
          this.modalHoliday.hide();
          this.notificationService.SuccesNotification(this.translate.instant("Holiday.HolidayCreated"));
        },
        error: (error) => {
          // Manejo de errores con switch según el código del backend
          if (error.error?.code) {
            switch (error.error?.code) {
              case CodeErrorEnum.HolidayAlreadyExists:
                this.notificationService.ErrorNotification(this.translate.instant("Error.HolidayAlreadyExists"));
                break;
              default:
                console.error('Error no manejado:', error.error.code);
            }
          } else {
            console.error('Error sin código específico:', error.message);
          }
        }
      });
    }
  }

  showDeleteModal(holiday: HolidayDTO): void {
    this.holidaySelected = holiday;
    this.modalDelete.show();
  }

  onChangeIsEveryYear(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.formHoliday.patchValue({ isEveryYear: checkbox.checked });
  }

  showHolidayModal(): void {
    this.modalHoliday.show();
  }

    deleteHoliday(): void {
    this.subscription.add(
      this.holidayService.delete(this.holidaySelected!.idHoliDay).subscribe({
              next: (data) => {
                this.notificationService.SuccesNotification(this.translate.instant("Holiday.HolidayDeleted"));
                this.modalDelete.hide();
                this.loadHolidays();
              },
              error: (error) => {
                // Manejo de errores con switch según el código del backend
                if (error.error?.code) {
                  switch (error.error.code) {
                    case CodeErrorEnum.CourtWithRecords:
                      this.notificationService.ErrorNotification(this.translate.instant("Error.CourtWithRecords"));
                      break;  
                    default:
                      console.error('Error no manejado:', error.error.code);
                  }
                } else {
                  console.error('Error sin código específico:', error.message);
                }
              }
            }));
  }

}
