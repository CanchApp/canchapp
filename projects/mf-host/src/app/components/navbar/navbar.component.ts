import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    standalone: false
})
export class NavbarComponent {

  userName: string = '';
  roleName: string = '';

  constructor(
    public translate: TranslateService,
    private readonly authService: AuthService) {

    this.userName = this.authService.getCompaniesLogin()[0].email ?? '';
    this.roleName = this.authService.getCompaniesLogin()[0].roleName ?? '';
  }

  onClicklogOut() {
      this.authService.logout();
  }

}
