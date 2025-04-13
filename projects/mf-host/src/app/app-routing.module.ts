import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { LoginComponent } from './pages/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard, authGuardMultilogin } from './guards/authGuard.guard';
import { MultiLoginComponent } from './pages/multilogin/multilogin.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},  
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
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
