import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {
  NotificationService,
  NotificationTypeEnum,
  PlacementAlignEnum,
  PlacementFromEnum
} from 'commons-lib';
import { RecoverPasswordService } from '../../services/recover-password.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'reset-password',
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.scss',
    standalone: false
})
export class ResetPasswordComponent {

  resetPasswordForm: FormGroup;
  isLoading: boolean = false;
  token: string = '';

  constructor(
    public translate: TranslateService,
    private readonly fb: FormBuilder,
    private route: ActivatedRoute,
    private readonly router: Router,
    private readonly recoverPasswordService: RecoverPasswordService,
    private readonly notificationService: NotificationService
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.token = params.get('token')!;
    });
  }

  onClickReset() {
    if (this.resetPasswordForm.valid) {
      if(!this.isValidPasswordMatch()) {
        this.showInvalidPasswordNotification();
        return;
      }

      this.isLoading = true;

      const credentials: { password: string, confirmPassword: string } = this.resetPasswordForm.value;
      this.recoverPasswordService.resetPassword(credentials.password, this.token).subscribe(
        () => {
          this.resetForm();
          this.showSuccessNotification();
          console.log('Cambio de contraseña exitoso');
        },
        (error) => {
          this.resetForm();
          this.showErrorNotification();
          console.error('Error al cambiar contraseña:', error);
        }
      );
    }
  }

  isValidPasswordMatch(): boolean {
    const password = this.resetPasswordForm.get('password')?.value;
    const confirmPassword = this.resetPasswordForm.get('confirmPassword')?.value;

    return password === confirmPassword;
  }

  resetForm() {
    this.isLoading = false;
    this.resetPasswordForm.reset();
  }

  showSuccessNotification() {
    this.notificationService.showCustomNotification({
      delay: 3000,
      title: this.translate.instant('RecoverPassword.ResetPasswordSuccess'),
      message: this.translate.instant('RecoverPassword.ResetPasswordSuccessMsg'),
      icon: 'fa-solid fa-check',
      type: NotificationTypeEnum.Succes,
      placementFrom: PlacementFromEnum.Bottom,
      placementAlign: PlacementAlignEnum.Center,
    });

    this.router.navigate(['/login']);
  }

  showErrorNotification() {
    this.notificationService.showCustomNotification({
      delay: 3000,
      title: this.translate.instant('RecoverPassword.ErrorResetPasswordTitle'),
      message: this.translate.instant('RecoverPassword.ErrorResetPasswordMsg'),
      icon: 'fa-solid fa-exclamation',
      type: NotificationTypeEnum.Danger,
      placementFrom: PlacementFromEnum.Bottom,
      placementAlign: PlacementAlignEnum.Center,
    });
  }

  showInvalidPasswordNotification() {
    this.notificationService.showCustomNotification({
      delay: 3000,
      title: this.translate.instant('RecoverPassword.InvalidPasswordTitle'),
      message: this.translate.instant('RecoverPassword.InvalidPasswordMsg'),
      icon: 'fa-solid fa-exclamation',
      type: NotificationTypeEnum.Danger,
      placementFrom: PlacementFromEnum.Bottom,
      placementAlign: PlacementAlignEnum.Center,
    });
  }
}
