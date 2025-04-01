import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActionEnum, SelectComponent, SelectIdEnum } from 'commons-lib';
import { UserService } from '../../services/user.service';
import { CreateUserDTO, UpdateUserDTO, UserDTO } from '../../models/user.model';
import { RoleService } from '../../services/role.service';
import { RoleDTO } from '../../models/role.model';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, CommonModule, SelectComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, AfterViewInit {
  @Input() userId: number = 0;
  @Input() action!: ActionEnum;

  @ViewChild('roleSelect') roleSelect: SelectComponent | undefined;

  userData: UserDTO = new UserDTO();
  roleList: RoleDTO[] = [];
  selectId: SelectIdEnum = SelectIdEnum.ListCourt;
  editAction: ActionEnum = ActionEnum.Edit;

  public formUser: FormGroup = new FormGroup({});

  constructor(
      public translate: TranslateService,
      private readonly userService: UserService,
      private readonly roleService: RoleService,
      private readonly formBuilder: FormBuilder,
      private route: Router,
  ) {}

  ngOnInit(): void {
    this.setFormGroup();
  }

  ngAfterViewInit(): void {
    this.loadData();
  }

  setFormGroup(): void {
    if(this.action == ActionEnum.Create) {
      this.formUser = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern(/^\d{6,10}$/)]],
        role: [{ id: '-1' }, [Validators.required, this.invalidRoleValidator()]]
      });
    } else {
      this.formUser = this.formBuilder.group({
        idUser: [this.userId],
        name: ['', [Validators.required]],
        role: [{ id: '-1' }, [Validators.required, this.invalidRoleValidator()]],
        isActive: [true]
      });
    }
  }

  async loadData(): Promise<void> {
    if(this.userId > 0) {
      await firstValueFrom(this.userService.getById(this.userId)).then(
        user => {
          this.userData = user;
          this.formUser.patchValue({
            ...user,
            role: { id: user.roleId.toString() }
          });
        }
      );
    }

    this.roleService.getAll().subscribe((roles: RoleDTO[]) => {
      this.roleList = roles;

      if(this.roleSelect) {
        const items = RoleDTO.transformToSelectDto(this.roleList);
        this.roleSelect.items = items;

        if(this.action == ActionEnum.Edit) {
          this.roleSelect.empty = false;
        }
      }
    });
  }

  save(): void {
    this.formUser.markAllAsTouched();
    
    console.log(this.formUser);

    if (!this.formUser.valid) {
      return;
    }

    // Llamar servicio de creación!
    try {
      if(this.action == ActionEnum.Create) {
        const payload: CreateUserDTO = {
          name: this.formUser.value.name,
          email: this.formUser.value.email,
          password: this.formUser.value.password,
          phone: this.formUser.value.phone,
          RoleId: Number(this.formUser.value.role.id)
        };

        console.log('payload:' , payload);

        this.userService.create(payload).subscribe(e => {
          this.redirectToList();
        });
      } else {
        const payload:UpdateUserDTO = {
          idUser: this.userId,
          name: this.formUser.value.name,
          isActive: this.formUser.value.isActive,
          newUserRoleId: Number(this.formUser.value.role.id)
        };

        this.userService.update(payload).subscribe(e => {
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

  // Validador personalizado para verificar si el id es "-1"
  invalidRoleValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.id === '-1') {
        return { invalidRole: true }; // Retorna un error si el id es '-1'
      }
      return null; // Retorna null si el valor es válido
    };
  }

  redirectToList(): void {
    this.route.navigate(['/user-management/users']);
  }
}
