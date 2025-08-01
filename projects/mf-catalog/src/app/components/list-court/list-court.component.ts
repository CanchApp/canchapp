import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CourtDTO } from '../../models/court.model';
import { Subscription } from 'rxjs';
import { CourtService } from '../../services/court.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CodeErrorEnum, NotificationService } from 'commons-lib';
import { CompanyService } from '../../services/company.service';

declare let bootstrap: any;

@Component({
    selector: 'app-court-list',
    imports: [TranslateModule, CommonModule, RouterLink],
    templateUrl: './list-court.component.html',
    styleUrl: './list-court.component.css'
})
export class CourtListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('deleteModal', { static: true}) modalDelete!: ElementRef;
  @ViewChild('btnNewCourt', { static: true}) btnNewCourt!: ElementRef;

  private readonly subscription: Subscription = new Subscription();

  courts: CourtDTO[] | undefined;
  deleteModal: any;
  idCourtSelected: number = -1;
  courtNameSelected: string = '';
  allowedCourt: boolean = false;

  constructor(
    public translate: TranslateService,
    private readonly courtService: CourtService,
    private readonly companyService: CompanyService,
    private readonly notificationService: NotificationService) { }

  ngOnInit(): void {
    this.allowCourt();
    this.loadCourts();
  }

  ngAfterViewInit(): void {
    this.deleteModal = new bootstrap.Modal(this.modalDelete.nativeElement);
  }

  loadCourts(): void {
    this.subscription.add(
      this.courtService.getCourtlist().subscribe((courts: CourtDTO[]) => {
        this.courts = [];
        this.courts = courts;
    }));
  }

  allowCourt(): void {
    this.subscription.add(
      this.companyService.getAllowCourt().subscribe((allowed: boolean) => {
        this.btnNewCourt.nativeElement.classList.toggle('disabled', !allowed);
        this.allowedCourt = !allowed;
      })
    );
  }

  showDeleteModal(idCourt: number, nameCourt: string): void {
    this.idCourtSelected = idCourt;
    this.courtNameSelected = nameCourt;
    this.deleteModal.show();
  }

  deleteCourt(): void {
    this.subscription.add(
      this.courtService.delete(this.idCourtSelected).subscribe({
              next: (data) => {
                this.notificationService.SuccesNotification(this.translate.instant("Court.CourtDeleted"));
                this.deleteModal.hide();
                this.loadCourts();
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
