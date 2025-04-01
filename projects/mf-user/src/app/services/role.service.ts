// Get all Roles
// Get all modules
// Get role by id
// Save role -> Llamar al GetAllRolesByModule
// Update role -> Llamar al GetAllRolesByModule
// Delete role
// GetAllRolesByModule -> Actualizar en localStorage!

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiEnum } from "commons-lib";
import { Observable } from "rxjs";
import { RoleItemDTO, RoleDTO } from "../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

    apiUrl: string = ApiEnum.Role;

    constructor(
      private readonly http: HttpClient
    ) {}

    getAll(): Observable<RoleDTO[]> {
        return this.http.get<RoleDTO[]>(`${this.apiUrl}`);
    }

    getById(roleId: number): Observable<RoleItemDTO> {
      return this.http.get<RoleItemDTO>(`${this.apiUrl}${roleId}`);
    }

    delete(roleId: number): Observable<number> {
      return this.http.delete<number>(`${this.apiUrl}${roleId}`);
    }

    create(data: RoleItemDTO): Observable<any> {
      return this.http.post(`${this.apiUrl}`, data);
    }

    update(roleId: number, data: RoleItemDTO): Observable<any> {
      return this.http.put(`${this.apiUrl}${roleId}`, data);
    }
}

