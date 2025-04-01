import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiEnum } from "commons-lib";
import { Observable } from "rxjs";
import { CreateUserDTO, UpdateUserDTO, UserDTO } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    apiUrl: string = ApiEnum.User;

    constructor(private readonly http: HttpClient) {
    }

    getAll(): Observable<UserDTO[]> {
        return this.http.get<UserDTO[]>(`${this.apiUrl}GetAll`);
    }

    getById(userId: number): Observable<UserDTO> {
      return this.http.get<UserDTO>(`${this.apiUrl}${userId}`);
    }

    create(data: CreateUserDTO): Observable<any> {
      return this.http.post(`${this.apiUrl}`, data);
    }

    update(data: UpdateUserDTO): Observable<number> {
      return this.http.put<number>(`${this.apiUrl}`, data);
    }

    delete(userId: number): Observable<number> {
      return this.http.delete<number>(`${this.apiUrl}${userId}`);
    }
}

