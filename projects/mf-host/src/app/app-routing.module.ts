import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { LoginComponent } from './pages/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard, authGuardMultilogin } from './guards/authGuard.guard';
import { MultiLoginComponent } from './pages/multilogin/multilogin.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { environment } from '../environments/environment';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'login-admin', component: LoginAdminComponent },
      { path: 'recover-password', component: RecoverPasswordComponent },
      { path: 'reset-password/:token', component: ResetPasswordComponent },
      {
        path: 'multilogin',
        component: MultiLoginComponent,
        canActivate: [authGuardMultilogin]
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'unauthorized',
        component: UnauthorizedComponent,
        canActivate: [authGuard]
      },
      { 
        path: 'admin', 
        canActivate: [authGuard],
        loadChildren: () => 
          loadRemoteModule({
            type: 'module',
            remoteEntry: environment.remotes.mfAdmin,
            exposedModule: './AdminModule'
          })
          .then(m => m.AdminModule)    
      },
      { 
        path: 'user-management', 
        canActivate: [authGuard],
        loadChildren: () => 
          loadRemoteModule({
            type: 'module',
            remoteEntry: environment.remotes.mfUser,
            exposedModule: './UserModule'
          })
          .then(m => m.UserModule)    
      },
      { 
        path: 'dashboard',
        canActivate: [authGuard],
        loadChildren: () => 
          loadRemoteModule({
            type: 'module',
            remoteEntry: environment.remotes.mfDashBoard,
            exposedModule: './DashboardModule'
          })
          .then(m => m.DashboardModule)        
      },
      { 
        path: 'company',
        canActivate: [authGuard],
        loadChildren: () => 
          loadRemoteModule({
            type: 'module',
            remoteEntry: environment.remotes.mfCompany,
            exposedModule: './CompanyModule'
          })
          .then(m => m.CompanyModule)        
      },
      { 
        path: 'catalog', 
        canActivate: [authGuard],
        loadChildren: () => 
          loadRemoteModule({
            type: 'module',
            remoteEntry: environment.remotes.mfCatalog,
            exposedModule: './CatalogModule'
          })
          .then(m => m.CatalogModule)        
      },
      { 
        path: 'booking', 
        canActivate: [authGuard],
        loadChildren: () => 
          loadRemoteModule({
            type: 'module',
            remoteEntry: environment.remotes.mfBooking,
            exposedModule: './BookingModule'
          })
          .then(m => m.BookingModule)        
      },
      { 
        path: 'report', 
        canActivate: [authGuard],
        loadChildren: () => 
          loadRemoteModule({
            type: 'module',
            remoteEntry: environment.remotes.mfReport,
            exposedModule: './ReportModule'
          })
          .then(m => m.ReportModule)        
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
