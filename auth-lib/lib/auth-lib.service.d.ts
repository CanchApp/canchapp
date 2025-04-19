import * as i0 from "@angular/core";
export declare class AuthLibService {
    constructor();
    getToken(): string;
    setToken(token: string, isProvisional: boolean): void;
    removeToken(): void;
    removePrvToken(): void;
    logOut(): void;
    isAuthenticated(): boolean;
    isAuthenticatedMultilogin(): boolean;
    getCompanies<T>(): T;
    setCompanies<T>(companies: T): void;
    getRoleModules<T>(): T;
    setRoleModules<T>(rolesModules: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthLibService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthLibService>;
}
