import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { AuthCredentials } from '../../models/login';
import {
  NotificationService,
  NotificationTypeEnum,
  PlacementAlignEnum,
  PlacementFromEnum
} from 'commons-lib';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    public translate: TranslateService,
    private readonly fb: FormBuilder, 
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService
  ) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }

  onClicklogin() {
    if (this.loginForm.valid) {
      this.isLoading = true;

      const credentials: AuthCredentials = this.loginForm.value;
      this.authService.Login(credentials).subscribe(
        () => {
          this.isLoading = false;
          console.log('Login exitoso');
        },
        (error) => {
          this.isLoading = false;
          
          this.notificationService.showCustomNotification({
            delay: 1000,
            title: this.translate.instant('Login.InvalidCredentialsTitle'),
            message: this.translate.instant('Login.InvalidCredentialsMsg'),
            icon: 'fa-solid fa-exclamation',
            type: NotificationTypeEnum.Warning,
            placementFrom: PlacementFromEnum.Bottom,
            placementAlign: PlacementAlignEnum.Center,
          });

          console.error('Error en la autenticación:', error);
        }
      );
    }
  }

}
