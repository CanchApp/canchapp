import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompanyComponent } from './components/list-company/list-company.component';
import { CompanyComponent } from './components/company/company.component';
import { ModuleListPageComponent } from './page/module-list/module-list.page.component';

const routes: Routes = [
  {path: 'modules', component: ModuleListPageComponent },
  {path: 'list-companies', component: ListCompanyComponent },
  {path: 'company', component: CompanyComponent },
  {path: 'company/:id', component: CompanyComponent },
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
