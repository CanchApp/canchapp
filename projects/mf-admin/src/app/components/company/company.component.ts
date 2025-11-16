import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder, FormArray, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDTO, PhoneDTO } from '../../models/company.model';
import { NotificationService, SelectComponent, SelectIdEnum } from 'commons-lib';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-company',
  imports: [TranslateModule, ReactiveFormsModule, CommonModule, SelectComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit {

  public formCompany: FormGroup = new FormGroup({});
  msgSave: string = '';
  msgError: string = '';
  idCompmany!: any;
  selectId: SelectIdEnum;
  
  constructor(
    public translate: TranslateService,
    private readonly companyService: CompanyService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly notificationService: NotificationService) {

    this.idCompmany = this.route.snapshot.paramMap.get('id')!;
    this.selectId = SelectIdEnum.ListCity;
  }

  ngOnInit(): void {

    this.formCompany = this.formBuilder.group({
      idCompany: [''],
      city: [{ id: '-1' }, [Validators.required, this.invalidCityValidator()]],
      name: ['', [Validators.required]],      
      direction: ['', [Validators.required]],
      phoneArray: this.formBuilder.array([]),
      phone: ['', [Validators.pattern(/^\d{6,10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      allowedUsers: [0],
      allowedCourt: [0],
      isSpecificValueHours: [true],
    });

    forkJoin({
      msg1: this.translate.get('Commons.MessageErrorNoti'),
      msg2: this.translate.get('Commons.MessageSuccessSaveNoti')
    }).subscribe((resultados) => {
      this.msgError = resultados.msg1;
      this.msgSave = resultados.msg2;
    });

    if (this.idCompmany)
      this.loadCompany();
  }

  // Validador personalizado para verificar si el id es "-1"
  invalidCityValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.id === '-1') {
        return { invalidCity: true }; // Retorna un error si el id es '-1'
      }
      return null; // Retorna null si el valor es válido
    };
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
    this.companyService.GetById(this.idCompmany).subscribe({
      next: (company: CompanyDTO) => {
        this.setPhones(company.phoneArray);
        this.formCompany.patchValue(company);
        this.formCompany.disable();
        this.formCompany.get('idCompany')?.enable();
        this.formCompany.get('allowedUsers')?.enable();
        this.formCompany.get('allowedCourt')?.enable();
      },
      error: err => console.error('Observable [companyService.get()] emitted an error: ' + err)
    });
  }

  onUpdate() {
    if(this.formCompany.valid) {
      let companyTmp: CompanyDTO = this.formCompany.value;
      companyTmp.phones = companyTmp.phoneArray.map((phone: { number: string }) => phone.number).join('|');
      const localizationTmp = this.getlocalization(this.formCompany.value.city);
      companyTmp.idCity = localizationTmp.idCity;
      companyTmp.latitude = localizationTmp.latitude;
      companyTmp.longitude = localizationTmp.longitude;
      
      this.companyService.update(companyTmp).subscribe({
        next: (company: CompanyDTO) => {
          this.notificationService.SuccesNotification(this.msgSave);
          this.onCancel();
        },
        error: err => { 
          this.notificationService.ErrorNotification(this.msgError);
          console.error('Observable [companyService.update()] emitted an error: ' + err)
        }
      });
    }
  }

  onCreate() {
    this.formCompany.markAllAsTouched();
    if(this.formCompany.valid) {
      let companyTmp: CompanyDTO = this.formCompany.value;
      companyTmp.phones = companyTmp.phoneArray.map((phone: { number: string }) => phone.number).join('|');
      const localizationTmp = this.getlocalization(this.formCompany.value.city);
      companyTmp.idCity = localizationTmp.idCity;
      companyTmp.latitude = localizationTmp.latitude;
      companyTmp.longitude = localizationTmp.longitude;
      
      this.companyService.create(companyTmp).subscribe({
        next: (company: CompanyDTO) => {
          this.notificationService.SuccesNotification(this.msgSave);
          this.onCancel();
        },
        error: err => { 
          this.notificationService.ErrorNotification(this.msgError);
          console.error('Observable [companyService.update()] emitted an error: ' + err)
        }
      });
    }
  }  

  onCancel(): void {
    this.router.navigate(['admin/list-companies']);
  }

  getlocalization(dataCity: any) {
    
    const localization = JSON.parse(dataCity.args)[0];
    return { idCity: dataCity.id, latitude: localization.Latitude, longitude: localization.Longitude  };
  }

}
