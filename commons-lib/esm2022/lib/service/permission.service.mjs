import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PermissionLibService {
    constructor() { }
    hasPermissionToComponent(parentModule, componentActions) {
        const actions = this.getActionsByRoleModule(parentModule);
        if (actions === null) {
            return false;
        }
        return actions[componentActions];
    }
    hasMultiplePermissionToComponent(parentModule, componentActions) {
        const actions = this.getActionsByRoleModule(parentModule);
        if (actions === null) {
            return [false];
        }
        const returnArray = componentActions.map(e => actions[e]);
        return returnArray;
    }
    getActionsByRoleModule(parentModule) {
        const permissions = JSON.parse(localStorage.getItem("ROLES_MODULES"));
        if (!permissions) {
            return null;
        }
        return permissions.find(e => e.moduleName == parentModule)?.actions || null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PermissionLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PermissionLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PermissionLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicy9jb21tb25zLWxpYi9zcmMvbGliL3NlcnZpY2UvcGVybWlzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzNDLE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsZ0JBQWUsQ0FBQztJQUVQLHdCQUF3QixDQUFDLFlBQXlCLEVBQUUsZ0JBQW1DO1FBQzFGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxRCxJQUFHLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxnQ0FBZ0MsQ0FBQyxZQUF5QixFQUFFLGdCQUFxQztRQUNwRyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUQsSUFBRyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQjtRQUVELE1BQU0sV0FBVyxHQUFjLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxZQUF5QjtRQUNwRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFFLENBQXVCLENBQUM7UUFFN0YsSUFBRyxDQUFDLFdBQVcsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxFQUFFLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDaEYsQ0FBQzsrR0FqQ1Esb0JBQW9CO21IQUFwQixvQkFBb0IsY0FGbkIsTUFBTTs7NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kdWxlQWN0aW9uc0VudW0sIE1vZHVsZXNFbnVtIH0gZnJvbSAnLi4vZW51bS9tb2R1bGVzLXJvbGVzLmVudW0nO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uQWN0aW9ucywgUGVybWlzc2lvbk1vZHVsZSB9IGZyb20gJy4uL21vZGVscy9wZXJtaXNzaW9uLW1vZHVsZS5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uTGliU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBwdWJsaWMgaGFzUGVybWlzc2lvblRvQ29tcG9uZW50KHBhcmVudE1vZHVsZTogTW9kdWxlc0VudW0sIGNvbXBvbmVudEFjdGlvbnM6IE1vZHVsZUFjdGlvbnNFbnVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9uc0J5Um9sZU1vZHVsZShwYXJlbnRNb2R1bGUpO1xyXG5cclxuICAgICAgICBpZihhY3Rpb25zID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY3Rpb25zW2NvbXBvbmVudEFjdGlvbnNdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNNdWx0aXBsZVBlcm1pc3Npb25Ub0NvbXBvbmVudChwYXJlbnRNb2R1bGU6IE1vZHVsZXNFbnVtLCBjb21wb25lbnRBY3Rpb25zOiBNb2R1bGVBY3Rpb25zRW51bVtdKTogYm9vbGVhbltdIHtcclxuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zQnlSb2xlTW9kdWxlKHBhcmVudE1vZHVsZSk7XHJcblxyXG4gICAgICAgIGlmKGFjdGlvbnMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtmYWxzZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXR1cm5BcnJheTogYm9vbGVhbltdID0gY29tcG9uZW50QWN0aW9ucy5tYXAoZSA9PiBhY3Rpb25zW2VdKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBY3Rpb25zQnlSb2xlTW9kdWxlKHBhcmVudE1vZHVsZTogTW9kdWxlc0VudW0pOiBQZXJtaXNzaW9uQWN0aW9ucyB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHBlcm1pc3Npb25zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlJPTEVTX01PRFVMRVNcIikhKSBhcyBQZXJtaXNzaW9uTW9kdWxlW107XHJcbiAgICBcclxuICAgICAgICBpZighcGVybWlzc2lvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHBlcm1pc3Npb25zLmZpbmQoZSA9PiBlLm1vZHVsZU5hbWUgPT0gcGFyZW50TW9kdWxlKT8uYWN0aW9ucyB8fCBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==