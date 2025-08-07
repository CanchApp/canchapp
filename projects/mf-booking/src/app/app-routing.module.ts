import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './page/booking/booking.page.component';
import { ActionEnum, ModuleActionsEnum, ModulesEnum, permissionGuard } from 'commons-lib';

const routes: Routes = [
  {path: '', redirectTo: 'booking', pathMatch: 'full'},
  {
    path: 'booking',
    component: BookingPageComponent,
    data: { actionState: ActionEnum.Detail, parentModule: ModulesEnum.Booking, parentModuleAction: ModuleActionsEnum.Read },
    canActivate: [permissionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
