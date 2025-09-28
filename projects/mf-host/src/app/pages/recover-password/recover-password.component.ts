import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthCredentials } from '../../models/login';
import {
  NotificationService,
  NotificationTypeEnum,
  PlacementAlignEnum,
  PlacementFromEnum
} from 'commons-lib';
import { RecoverPasswordService } from '../../services/recover-password.service';

@Component({
    selector: 'recover-password',
    templateUrl: './recover-password.component.html',
    styleUrl: './recover-password.component.scss',
    standalone: false
})
export class RecoverPasswordComponent {

  recoverPasswordForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    public translate: TranslateService,
    private readonly fb: FormBuilder, 
    private readonly recoverPasswordService: RecoverPasswordService,
    private readonly notificationService: NotificationService
  ) {
    this.recoverPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onClickRecover() {
    if (this.recoverPasswordForm.valid) {
      this.isLoading = true;

      const credentials: AuthCredentials = this.recoverPasswordForm.value;
      this.recoverPasswordService.sendMail(credentials.email).subscribe(
        () => {
          this.resetForm();
          this.showSuccessNotification();
          console.log('Envío de mail exitoso');
        },
        (error) => {
          this.resetForm();
          this.showErrorNotification();
          console.error('Error al enviar correo de recuperación:', error);
        }
      );
    }
  }

  resetForm() {
    this.isLoading = false;
    this.recoverPasswordForm.reset();
  }

  showSuccessNotification() {
    this.notificationService.showCustomNotification({
      delay: 3000,
      title: this.translate.instant('RecoverPassword.EmailSentTitle'),
      message: this.translate.instant('RecoverPassword.EmailSentMsg'),
      icon: 'fa-solid fa-check',
      type: NotificationTypeEnum.Succes,
      placementFrom: PlacementFromEnum.Bottom,
      placementAlign: PlacementAlignEnum.Center,
    });
  }

  showErrorNotification() {
    this.notificationService.showCustomNotification({
      delay: 3000,
      title: this.translate.instant('RecoverPassword.ErrorEmailSentTitle'),
      message: this.translate.instant('RecoverPassword.ErrorEmailSentMsg'),
      icon: 'fa-solid fa-exclamation',
      type: NotificationTypeEnum.Danger,
      placementFrom: PlacementFromEnum.Bottom,
      placementAlign: PlacementAlignEnum.Center,
    });
  }
}
