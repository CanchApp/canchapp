import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActionEnum } from 'commons-lib';
import { UserDTO } from '../../models/user.model';
import { RoleService } from '../../services/role.service';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ModuleService } from '../../services/module.service';
import { ModuleDTO } from '../../models/module.model';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, CommonModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent implements OnInit, AfterViewInit {
  @Input() roleId: number = 0;
  @Input() action!: ActionEnum;

  roleData: UserDTO = new UserDTO();
  editAction: ActionEnum = ActionEnum.Edit;

  public formRole: FormGroup = new FormGroup({});

  constructor(
      public translate: TranslateService,
      private readonly moduleService: ModuleService,
      private readonly roleService: RoleService,
      private readonly formBuilder: FormBuilder,
      private route: Router,
  ) {}

  ngOnInit(): void {
    this.setFormGroup();
  }

  ngAfterViewInit(): void {
    this.setRoleModulesFormArray();
    Promise.resolve().then(() => this.loadData());
  }

  get roleModules(): FormArray {
    return this.formRole.get('roleModules') as FormArray;
  }

  createItem(module: ModuleDTO): FormGroup {
    return this.formBuilder.group({
      idModule: [module.idModule],  // ID del módulo
      moduleName: [module.name], // Nombre del módulo
      actions: this.formBuilder.group({
        create: [false], // Checkbox para "Crear"
        read: [false],   // Checkbox para "Leer"
        update: [false], // Checkbox para "Actualizar"
        delete: [false]  // Checkbox para "Eliminar"
      })
    });
  }

  setFormGroup(): void {
    this.formRole = this.formBuilder.group({
        idRole: [0],
        name: ['', [Validators.required]],
        roleModules: this.formBuilder.array([])
    });
  }

  async setRoleModulesFormArray(): Promise<void> {
    const modules = await firstValueFrom(this.moduleService.getAll());

    for (let module of modules) {
        this.roleModules.push(this.createItem(module));
    }
  }

  async loadData(): Promise<void> {
    if(this.roleId > 0) {
      await firstValueFrom(this.roleService.getById(this.roleId)).then(
        role => {
          this.formRole.patchValue({
            ...role
          });
        }
      );
    }
  }

  save(): void {
    this.formRole.markAllAsTouched();

    if (!this.formRole.valid) {
      return;
    }

    try {
      if(this.action == ActionEnum.Create) {
        this.roleService.create(this.formRole.value).subscribe(e => {
          this.redirectToList();
        });
      } else {
        this.roleService.update(this.roleId, this.formRole.value).subscribe(e => {
            this.redirectToList();
        });
      }
    } catch(e) {
      console.error(e);
    }
  }

  cancel(): void {
    this.redirectToList();
  }

  redirectToList(): void {
    this.route.navigate(['/user-management/roles']);
  }
}
