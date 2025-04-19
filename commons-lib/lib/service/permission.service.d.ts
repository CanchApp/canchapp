import { ModuleActionsEnum, ModulesEnum } from '../enum/modules-roles.enum';
import * as i0 from "@angular/core";
export declare class PermissionLibService {
    constructor();
    hasPermissionToComponent(parentModule: ModulesEnum, componentActions: ModuleActionsEnum): boolean;
    hasMultiplePermissionToComponent(parentModule: ModulesEnum, componentActions: ModuleActionsEnum[]): boolean[];
    private getActionsByRoleModule;
    static ɵfac: i0.ɵɵFactoryDeclaration<PermissionLibService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PermissionLibService>;
}
