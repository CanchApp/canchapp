import { inject } from "@angular/core";
import { CanActivateFn, Router } from '@angular/router';
import { ModuleActionsEnum, ModulesEnum } from "../enum/modules-roles.enum";
import { PermissionLibService } from "../service/permission.service";

export const permissionGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const service = inject(PermissionLibService);

    try {
        const parentModule: ModulesEnum = route.data['parentModule'];
        const componentAction: ModuleActionsEnum = route.data['parentModuleAction'];

        if(!parentModule || !componentAction) {
            return false;
        }

        console.log('parentModule', parentModule);
        console.log('componentAction', componentAction);

        if(service.hasPermissionToComponent(parentModule, componentAction)) {
            return true;
        } else {
            router.navigate(['/unauthorized']);
            return false;
        }
    }
    catch (error) {
        console.error(error);
        router.navigate(['/unauthorized']);
        return false;
    }    
}