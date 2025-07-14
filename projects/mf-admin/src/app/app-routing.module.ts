import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListModulesPageComponent } from './page/list-modules/list-modules.page.component';

const routes: Routes = [
  {path: 'list', component: ListModulesPageComponent },
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
