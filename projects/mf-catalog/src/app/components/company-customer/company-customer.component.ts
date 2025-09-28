import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'commons-lib';
import { forkJoin } from 'rxjs';
import { CompanyService } from '../../services/company.service';
import { CompanyDTO, PhoneDTO } from '../../models/company.model';


@Component({
    selector: 'app-company-customer',
    imports: [TranslateModule, ReactiveFormsModule, CommonModule],
    templateUrl: './company-customer.component.html',
    styleUrl: './company-customer.component.css'
})

export class CompanyCustomerComponent implements OnInit {

  public formCompany: FormGroup = new FormGroup({});
  msgSave: string = '';
  msgError: string = '';
  selectedFile: File | null = null;
  uploadedLogoUrl: string | null = null;

  constructor(
    public translate: TranslateService,
    private readonly companyService: CompanyService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly notificationService: NotificationService) {

      forkJoin({
        msg1: this.translate.get('Commons.MessageErrorNoti'),
        msg2: this.translate.get('Commons.MessageSuccessSaveNoti')
      }).subscribe((resultados) => {
        this.msgError = resultados.msg1;
        this.msgSave = resultados.msg2;
      });

  }

  ngOnInit(): void {

    this.formCompany = this.formBuilder.group({
      idCompany: ['', [Validators.required]],
      name: ['', [Validators.required]],
      direction: ['', Validators.required],
      phoneArray: this.formBuilder.array([]),
      phone: ['', [Validators.pattern(/^\d{6,10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      isSpecificValueHours: [false],
      allowedUsers: [''],
      allowedCourt: [''],
      logo: [null]
    });
    this.loadCompany();
  }

  // Getter para acceder al FormArray de 'phones'
  get phoneArray(): FormArray {
    return this.formCompany.get('phoneArray') as FormArray;
  }

  // Método para inicializar el FormArray con los datos obtenidos
  setPhones(phoneNumbers: PhoneDTO[]): void {
    phoneNumbers.forEach((number) => {
      const phoneFormGroup = this.formBuilder.group({
        number: [number, [Validators.required, Validators.pattern(/^\d{6,10}$/)]]
      });
      this.phoneArray.push(phoneFormGroup);
    });
  }

  // Método para agregar un nuevo campo de teléfono
  addPhone(): void {
    if(this.formCompany.controls['phone'].valid) {
      const phoneFormGroup = this.formBuilder.group({
        number: [this.formCompany.get('phone')?.value, [Validators.required, Validators.pattern(/^\d{6,10}$/)]]
      });
      this.phoneArray.push(phoneFormGroup);
      this.formCompany.get('phone')?.setValue('');
    }
  }

  // Método para eliminar un campo de teléfono
  removePhone(index: number): void {
    this.phoneArray.removeAt(index);
  }

  loadCompany(): void {
    this.companyService.get().subscribe({
      next: (company: CompanyDTO) => {
        this.uploadedLogoUrl = company.imageUrl || null;
        this.setPhones(company.phoneArray);
        this.formCompany.patchValue(company);
      },
      error: err => console.error('Observable [companyService.get()] emitted an error: ' + err)
    });
  }

  onUpdate() {
    if(this.formCompany.valid) {
      let companyTmp: CompanyDTO = this.formCompany.value;
      companyTmp.phones = companyTmp.phoneArray.map((phone: { number: string }) => phone.number).join('|');
      
      this.companyService.update(companyTmp).subscribe({
        next: (company: CompanyDTO) => {          
          this.formCompany.patchValue(company);
          this.notificationService.SuccesNotification(this.msgSave);
        },
        error: err => { 
          this.notificationService.ErrorNotification(this.msgError);
          console.error('Observable [companyService.update()] emitted an error: ' + err)
        }
      });
    }
  }  

  onCancel(): void {
    this.router.navigate(['company/list']);
  }
  
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onUploadLogo() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append("file", this.selectedFile);

    this.companyService.upFile(formData).subscribe({
      next: (res: number) => {
        this.loadCompany();
        this.notificationService.SuccesNotification(this.msgSave);
      },
      error: err => { 
        this.notificationService.ErrorNotification(this.msgError);
        console.error('Observable [companyService.update()] emitted an error: ' + err)
      }
    });
  }

}
