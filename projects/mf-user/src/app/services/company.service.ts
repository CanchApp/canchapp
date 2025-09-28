import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiEnum } from 'commons-lib';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {  

  apiUrl: string = ApiEnum.Company;

  constructor(private readonly http: HttpClient) {
  }

  getAllowUsers(): Observable<boolean> {
        return this.http.get<boolean>(`${this.apiUrl}AllowUsers`);
    }
}
