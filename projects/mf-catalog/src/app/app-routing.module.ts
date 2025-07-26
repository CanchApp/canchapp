import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionEnum } from 'commons-lib';
import { CatalogListPageComponent } from './page/catalog-list/catalog-list.page.component';
import { CourtListPageComponent } from './page/court-list/court-list.page.component';
import { CourtPageComponent } from './page/court/court.page.component';
import { CompanyPageComponent } from './page/company/company.page.component';
import { HolidayPageComponent } from './page/holiday/holiday.page.component';

const routes: Routes = [  
  {path: 'list', component: CatalogListPageComponent },
  {path: 'holidays', component: HolidayPageComponent },  
  {path: 'court-list', component: CourtListPageComponent },
  {path: 'court-new', component: CourtPageComponent, data: { actionState: ActionEnum.Create } },
  {path: 'court-edit/:id', component: CourtPageComponent, data: { actionState: ActionEnum.Edit } },
  {path: 'court-detail/:id', component: CourtPageComponent, data: { actionState: ActionEnum.Detail } },
  {path: 'company', component: CompanyPageComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
