import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiEnum } from 'commons-lib';
import { CompanyDTO } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {  

  apiUrl: string = ApiEnum.Company;

  constructor(private readonly http: HttpClient) {
  }

  get(): Observable<CompanyDTO> {
    
    return this.http.get<CompanyDTO>(`${this.apiUrl}Get`).pipe(
      map((response: CompanyDTO) => {
        // Transformar el campo 'phones' a un arreglo
        return {
          ...response,
          phoneArray: response.phones 
          ? response.phones.split('|').map(phoneNumber => ({ number: phoneNumber })) 
          : []
        };
      })
    );
  }

  update(company: CompanyDTO): Observable<CompanyDTO> {
    return this.http.put<CompanyDTO>(`${this.apiUrl}UpdateCustomer`, company);
  }

  getAllowCourt(): Observable<boolean> {
        return this.http.get<boolean>(`${this.apiUrl}AllowCourt`);
    }
}
