import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLibService } from './auth-lib.service';
import * as i0 from "@angular/core";
export declare class AuthInterceptor implements HttpInterceptor {
    private readonly authLibService;
    constructor(authLibService: AuthLibService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthInterceptor>;
}
