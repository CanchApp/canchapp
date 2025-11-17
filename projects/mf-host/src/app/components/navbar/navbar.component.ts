import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    standalone: false
})
export class NavbarComponent {

  userName: string = '';
  roleName: string = '';
  idUser: number = 0;

  constructor(
    public translate: TranslateService,
    private readonly router: Router,
    private readonly authService: AuthService) {

      if(this.authService.isAdmin()){
        this.userName = 'Admin';
        this.roleName = 'Administrator';
      } else {        
        this.userName = this.authService.getCompaniesLogin()[0].email ?? '';
        this.roleName = this.authService.getCompaniesLogin()[0].roleName ?? '';
        this.idUser = this.authService.getCompaniesLogin()[0].idUser ?? 0;
      }
  }

  onClicklogOut() {
      this.authService.logout();
  }

  onClickProfile() {
    this.router.navigate(['user-management/user-edit/5']);
  }

}
