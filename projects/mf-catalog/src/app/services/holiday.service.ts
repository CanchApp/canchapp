import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiEnum } from 'commons-lib';
import { HolidayDTO } from '../models/holiday.model';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {  

  apiUrl: string = ApiEnum.HoliDay;

  constructor(private readonly http: HttpClient) {
  }

  getAll(): Observable<HolidayDTO[]> {
    return this.http.get<HolidayDTO[]>(`${this.apiUrl}GetHoliDayAll`);
  }

  delete(idHoliday: number): Observable<number> {
    return this.http.delete<number>(`${this.apiUrl}Delete/${idHoliday}`);
  }

  create(holiday: HolidayDTO): Observable<HolidayDTO> {
    return this.http.post<HolidayDTO>(`${this.apiUrl}Create`, holiday);
  }
  
}
