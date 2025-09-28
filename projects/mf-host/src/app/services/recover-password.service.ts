import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEnum } from 'commons-lib';

@Injectable({
  providedIn: 'root'
})
export class RecoverPasswordService {

  apiUrl: string = ApiEnum.Security; //'https://securityapi.azurewebsites.net/api/Security/';

  constructor(
    private readonly http: HttpClient
  ) {}

  sendMail(email: string) {
    return this.http.post<any>(`${this.apiUrl}ResetPassword`, { email });
  }

  resetPassword(password: string, token: string) {
    return this.http.post<any>(`${this.apiUrl}ResetPassword/${token}`, { newPassword: password, token });
  }
}