import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { catchError, Subject, Subscription, switchMap, throwError } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import {
  DropdownComponent,
  DropdownItemModel,
  ActionEnum,
  ConfirmModalComponent,
  ConfirmModalModel,
  NotificationService,
  PermissionLibService,
  ModulesEnum,
  ModuleActionsEnum
} from 'commons-lib';
import { RoleDTO } from '../../models/role.model';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'roles-list.page',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    DropdownComponent,
    ConfirmModalComponent,
    RouterLink
  ],
  templateUrl: './roles-list.page.component.html',
  styleUrl: './roles-list.page.component.css'
})
export class RolesListComponent implements OnInit {
  @ViewChild('confirmDeleteModal') confirmDeleteModal!: ConfirmModalComponent;

  private readonly subscription: Subscription = new Subscription();
  private reloadRoles$ = new Subject<void>();

  roles: RoleDTO[] | undefined;
  confirmModalData: ConfirmModalModel = new ConfirmModalModel();

  private actionsCallbacks: Map<ActionEnum, Function> = new Map();

  /* actions permission */
  public allowCreate: boolean = false;
  public allowUpdate: boolean = false;
  public allowDelete: boolean = false;

  constructor(
      public translate: TranslateService,
      private readonly roleService: RoleService,
      private readonly notificationService: NotificationService,
      private readonly permissionLibService: PermissionLibService,
      private readonly router: Router
    ) {
      [this.allowCreate, this.allowUpdate, this.allowDelete] = this.permissionLibService.hasMultiplePermissionToComponent(
        ModulesEnum.Roles,
        [
          ModuleActionsEnum.Create,
          ModuleActionsEnum.Update,
          ModuleActionsEnum.Delete
        ]
      );
    }
  
    ngOnInit(): void {
      this.loadRoles();
      this.loadActions();
      this.loadConfirmModalData();
    }

    loadConfirmModalData(): void {
      this.confirmModalData = {
        title: this.translate.instant('Role.DeleteRole'),
        body: this.translate.instant('Role.ConfirmDeleteRole'),
        confirmLabel: this.translate.instant('Button.Yes'),
        cancelLabel: this.translate.instant('Button.No')
      };
    }
  
    loadRoles(): void {
      this.subscription.add(
        this.reloadRoles$.pipe(
          switchMap(() => this.roleService.getAll())
        ).subscribe((roles: RoleDTO[]) => {
          this.roles = roles;
        })
      );
    
      this.reloadRoles$.next();
    }

    loadActions(): void {
      this.actionsCallbacks.set(ActionEnum.Edit, (roleId: number) => this.editRole(roleId));
      this.actionsCallbacks.set(ActionEnum.Delete, (roleId: number) => this.deleteRole(roleId));
    }

    loadActionItems(roleId: number): DropdownItemModel[] {
      const actions: DropdownItemModel[] = [
        {
          id: roleId,
          name: this.translate.instant('Button.Edit'),
          disabled: false,
          action: ActionEnum.Edit
        },
        {
          id: roleId,
          name: this.translate.instant('Button.Delete'),
          disabled: false,
          action: ActionEnum.Delete
        }
      ];

      return actions;
    }

    handleAction(actionItem: DropdownItemModel) {
      const action = this.actionsCallbacks.get(actionItem.action);

      if(action) {
        action(actionItem.id);
      }
    }

    editRole(roleId: number): void {
      this.router.navigate([`/user-management/role-edit/${roleId}`]);
    }

    deleteRole(roleId: number): void {
      const role = this.roles?.find(e => e.idRole == roleId);
      
      if(role) {
        this.confirmModalData.boldBody = role.name;
        this.confirmDeleteModal.openModal(roleId);
      }
    }

    onConfirmDelete(roleId: number): void {
        this.roleService.delete(roleId).pipe(
            catchError(error => {
                const errorMsg = this.translate.instant("Role.RoleDeletedError");
                this.notificationService.ErrorNotification(errorMsg);
                console.error('Error en la petición:', error);
                return throwError(() => new Error(errorMsg));
            })
            ).subscribe(data => {
                this.notificationService.SuccesNotification(this.translate.instant("Role.RoleDeleted"));
                this.reloadRoles$.next();
            });
    }
}
