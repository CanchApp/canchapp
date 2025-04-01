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
import { UserDTO } from "../models/user.model";
import { ModuleDTO } from "../models/module.model";

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

    apiUrl: string = ApiEnum.Module;

    constructor(private readonly http: HttpClient) {
    }

    getAll(): Observable<ModuleDTO[]> {
        return this.http.get<ModuleDTO[]>(`${this.apiUrl}`);
    }
}

