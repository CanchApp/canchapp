import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const AUTH_TOKEN_KEY = 'TKCANCHAPP';
const PRV_AUTH_TOKEN_KEY = 'PRV_TKCANCHAPP';
const COMPANIES_KEY = 'COMPANIES';

class AuthLibService {
    constructor() { }
    getToken() {
        return localStorage.getItem(AUTH_TOKEN_KEY) ?? localStorage.getItem(PRV_AUTH_TOKEN_KEY);
    }
    ;
    setToken(token, isProvisional) {
        if (isProvisional) {
            this.removeToken();
            localStorage.setItem(PRV_AUTH_TOKEN_KEY, token);
        }
        else {
            this.removePrvToken();
            localStorage.setItem(AUTH_TOKEN_KEY, token);
        }
    }
    removeToken() {
        localStorage.removeItem(AUTH_TOKEN_KEY);
    }
    removePrvToken() {
        localStorage.removeItem(PRV_AUTH_TOKEN_KEY);
    }
    logOut() {
        this.removeToken();
        this.removePrvToken();
    }
    isAuthenticated() {
        // Verifica si el token existe en localStorage
        return !!localStorage.getItem(AUTH_TOKEN_KEY) && !localStorage.getItem(PRV_AUTH_TOKEN_KEY);
    }
    isAuthenticatedMultilogin() {
        // Verifica si el token provisional existe en localStorage
        return !localStorage.getItem(AUTH_TOKEN_KEY) && !!localStorage.getItem(PRV_AUTH_TOKEN_KEY);
    }
    getCompanies() {
        return JSON.parse(localStorage.getItem(COMPANIES_KEY));
    }
    setCompanies(companies) {
        localStorage.setItem(COMPANIES_KEY, JSON.stringify(companies));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AuthLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AuthLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AuthLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class AuthLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AuthLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: AuthLibComponent, isStandalone: true, selector: "lib-auth-lib", ngImport: i0, template: `
    <p>
      auth-lib works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AuthLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-auth-lib', standalone: true, imports: [], template: `
    <p>
      auth-lib works!
    </p>
  ` }]
        }] });

class AuthInterceptor {
    constructor(authLibService) {
        this.authLibService = authLibService;
    }
    intercept(req, next) {
        const token = this.authLibService.getToken();
        let authReq = req;
        if (token) {
            authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(authReq);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AuthInterceptor, deps: [{ token: AuthLibService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AuthInterceptor, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AuthInterceptor, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: AuthLibService }] });

class AuthLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AuthLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: AuthLibModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AuthLibModule, providers: [
            {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
                multi: true
            }
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AuthLibModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: AuthInterceptor,
                            multi: true
                        }
                    ]
                }]
        }] });

/*
 * Public API Surface of auth-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthLibComponent, AuthLibModule, AuthLibService };
//# sourceMappingURL=auth-lib.mjs.map
