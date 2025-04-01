import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, Subscription, switchMap } from 'rxjs';
import { UserDTO } from '../../models/user.model';
import { UserService } from '../../services/user.service';
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

@Component({
  selector: 'users-list.page',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    DropdownComponent,
    ConfirmModalComponent,
    RouterLink
],
  templateUrl: './users-list.page.component.html',
  styleUrl: './users-list.page.component.css'
})
export class UsersListComponent implements OnInit {
  @ViewChild('confirmDeleteModal') confirmDeleteModal!: ConfirmModalComponent;

  private readonly subscription: Subscription = new Subscription();
  private reloadUsers$ = new Subject<void>();

  users: UserDTO[] | undefined;
  confirmModalData: ConfirmModalModel = new ConfirmModalModel();

  private actionsCallbacks: Map<ActionEnum, Function> = new Map();

  /* actions permission */
  public allowCreate: boolean = false;
  public allowUpdate: boolean = false;
  public allowDelete: boolean = false;

  constructor(
      public translate: TranslateService,
      private readonly userService: UserService,
      private readonly notificationService: NotificationService,
      private readonly permissionLibService: PermissionLibService,
      private readonly router: Router
    ) {
      /*this.allowCreate = this.permissionLibService.hasPermissionToComponent(
        ModulesEnum.Users,
        ModuleActionsEnum.Create
      );
      this.allowUpdate = this.permissionLibService.hasPermissionToComponent(
        ModulesEnum.Users,
        ModuleActionsEnum.Update
      );
      this.allowDelete = this.permissionLibService.hasPermissionToComponent(
        ModulesEnum.Users,
        ModuleActionsEnum.Delete
      );*/

      [this.allowCreate, this.allowUpdate, this.allowDelete] = this.permissionLibService.hasMultiplePermissionToComponent(
        ModulesEnum.Users,
        [
          ModuleActionsEnum.Create,
          ModuleActionsEnum.Update,
          ModuleActionsEnum.Delete
        ]
      );
    }
  
    ngOnInit(): void {
      this.loadUsers();
      this.loadActions();
      this.loadConfirmModalData();
    }

    loadConfirmModalData(): void {
      this.confirmModalData = {
        title: this.translate.instant('User.DeleteUser'),
        body: this.translate.instant('User.ConfirmDeleteUser'),
        confirmLabel: this.translate.instant('Button.Yes'),
        cancelLabel: this.translate.instant('Button.No')
      };
    }
  
    loadUsers(): void {
      this.subscription.add(
        this.reloadUsers$.pipe(
          switchMap(() => this.userService.getAll())
        ).subscribe((users: UserDTO[]) => {
          this.users = users;
        })
      );
    
      this.reloadUsers$.next();
    }

    loadActions(): void {
      this.actionsCallbacks.set(ActionEnum.Edit, (userId: number) => this.editUser(userId));
      this.actionsCallbacks.set(ActionEnum.Delete, (userId: number) => this.deleteUser(userId));
    }

    loadActionItems(userId: number): DropdownItemModel[] {
      let actions: DropdownItemModel[] = [];

      if(this.allowUpdate) {
        actions.push({
          id: userId,
          name: this.translate.instant('Button.Edit'),
          disabled: false,
          action: ActionEnum.Edit
        });
      }
      
      if(this.allowDelete) {
        actions.push({
          id: userId,
          name: this.translate.instant('Button.Delete'),
          disabled: false,
          action: ActionEnum.Delete
        });
      }

      return actions;
    }

    handleAction(actionItem: DropdownItemModel) {
      const action = this.actionsCallbacks.get(actionItem.action);

      if(action) {
        action(actionItem.id);
      }
    }

    editUser(userId: number): void {
      this.router.navigate([`/user-management/user-edit/${userId}`]);
    }

    deleteUser(userId: number): void {
      const user = this.users?.find(e => e.idUser == userId);
      
      if(user) {
        this.confirmModalData.boldBody = user.name;
        this.confirmDeleteModal.openModal(userId);
      }
    }

    onConfirmDelete(userId: number): void {
      this.userService.delete(userId).subscribe(() => {
        this.notificationService.SuccesNotification(this.translate.instant("User.UserDeleted"));
        this.reloadUsers$.next();
      });
    }
}
