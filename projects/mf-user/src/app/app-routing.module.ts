import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list.page/users-list.page.component';
import { UserPageComponent } from './pages/user.page/user.page.component';
import { ActionEnum, ModulesEnum, ModuleActionsEnum, permissionGuard } from 'commons-lib';
import { RolesListComponent } from './pages/roles-list.page/roles-list.page.component';
import { RolePageComponent } from './pages/role.page/role.page.component';

const routes: Routes = [
  { 
    path: 'users',
    component: UsersListComponent,
    data: { parentModule: ModulesEnum.Users, parentModuleAction: ModuleActionsEnum.Read },
    canActivate: [permissionGuard]
  },
  {
    path: 'user-create',
    component: UserPageComponent,
    data: { actionState: ActionEnum.Create, parentModule: ModulesEnum.Users, parentModuleAction: ModuleActionsEnum.Create },
    canActivate: [permissionGuard]
  },
  {
    path: 'user-edit/:id',
    component: UserPageComponent,
    data: { actionState: ActionEnum.Edit, parentModule: ModulesEnum.Users, parentModuleAction: ModuleActionsEnum.Update },
    canActivate: [permissionGuard]
  },
  {
    path: 'roles',
    component: RolesListComponent,
    data: { parentModule: ModulesEnum.Roles, parentModuleAction: ModuleActionsEnum.Read },
    canActivate: [permissionGuard]
  },
  {
    path: 'role-create',
    component: RolePageComponent,
    data: { actionState: ActionEnum.Create, parentModule: ModulesEnum.Roles, parentModuleAction: ModuleActionsEnum.Create },
    canActivate: [permissionGuard]
  },
  {
    path: 'role-edit/:id',
    component: RolePageComponent,
    data: { actionState: ActionEnum.Edit, parentModule: ModulesEnum.Roles, parentModuleAction: ModuleActionsEnum.Update },
    canActivate: [permissionGuard]
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];

/*const routes: Routes = [
  { 
    path: 'users',
    component: UsersListComponent,
    data: { parentModule: ModulesEnum.Users, parentModuleAction: ModuleActionsEnum.Read }
  },
  {
    path: 'user-create',
    component: UserPageComponent,
    data: { actionState: ActionEnum.Create, parentModule: ModulesEnum.Users, parentModuleAction: ModuleActionsEnum.Create }
  },
  {
    path: 'user-edit/:id',
    component: UserPageComponent,
    data: { actionState: ActionEnum.Edit, parentModule: ModulesEnum.Users, parentModuleAction: ModuleActionsEnum.Update }
  },
  {
    path: 'roles',
    component: RolesListComponent,
    data: { parentModule: ModulesEnum.Roles, parentModuleAction: ModuleActionsEnum.Read }
  },
  {
    path: 'role-create',
    component: RolePageComponent,
    data: { actionState: ActionEnum.Create, parentModule: ModulesEnum.Roles, parentModuleAction: ModuleActionsEnum.Create }
  },
  {
    path: 'role-edit/:id',
    component: RolePageComponent,
    data: { actionState: ActionEnum.Edit, parentModule: ModulesEnum.Roles, parentModuleAction: ModuleActionsEnum.Update }
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
