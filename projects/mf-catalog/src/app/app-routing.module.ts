import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionEnum, ModuleActionsEnum, ModulesEnum, permissionGuard } from 'commons-lib';
import { CatalogListPageComponent } from './page/catalog-list/catalog-list.page.component';
import { CourtListPageComponent } from './page/court-list/court-list.page.component';
import { CourtPageComponent } from './page/court/court.page.component';
import { CompanyPageComponent } from './page/company/company.page.component';
import { HolidayPageComponent } from './page/holiday/holiday.page.component';

const routes: Routes = [  
  {
    path: 'list',
    component: CatalogListPageComponent,
    data: { parentModule: ModulesEnum.Catalog, parentModuleAction: ModuleActionsEnum.Read },
    canActivate: [permissionGuard]
  },
  {path: 'holidays', component: HolidayPageComponent },  
  {path: 'court-list', component: CourtListPageComponent },
  {
    path: 'court-new',
    component: CourtPageComponent,
    data: { actionState: ActionEnum.Create, parentModule: ModulesEnum.Courts, parentModuleAction: ModuleActionsEnum.Create },
    canActivate: [permissionGuard]
  },
  {
    path: 'court-edit/:id',
    component: CourtPageComponent,
    data: { actionState: ActionEnum.Edit, parentModule: ModulesEnum.Courts, parentModuleAction: ModuleActionsEnum.Update },
    canActivate: [permissionGuard]
  },
  {
    path: 'court-detail/:id',
    component: CourtPageComponent,
    data: { actionState: ActionEnum.Detail, parentModule: ModulesEnum.Courts, parentModuleAction: ModuleActionsEnum.Read },
    canActivate: [permissionGuard]
  },
  {path: 'company', component: CompanyPageComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
