import { Injectable } from '@angular/core';
import { ModuleActionsEnum, ModulesEnum } from '../enum/modules-roles.enum';
import { PermissionActions, PermissionModule } from '../models/permission-module.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionLibService {

  constructor() {}

    public hasPermissionToComponent(parentModule: ModulesEnum, componentActions: ModuleActionsEnum): boolean {
        const actions = this.getActionsByRoleModule(parentModule);

        if(actions === null) {
            return false;
        }

        return actions[componentActions];
    }

    public hasMultiplePermissionToComponent(parentModule: ModulesEnum, componentActions: ModuleActionsEnum[]): boolean[] {
        const actions = this.getActionsByRoleModule(parentModule);

        if(actions === null) {
            return [false];
        }

        const returnArray: boolean[] = componentActions.map(e => actions[e]);
        return returnArray;
    }

    private getActionsByRoleModule(parentModule: ModulesEnum): PermissionActions | null {
        const permissions = JSON.parse(localStorage.getItem("ROLES_MODULES")!) as PermissionModule[];
    
        if(!permissions) {
            return null;
        }
    
        return permissions.find(e => e.moduleName == parentModule)?.actions || null;
    }
}
