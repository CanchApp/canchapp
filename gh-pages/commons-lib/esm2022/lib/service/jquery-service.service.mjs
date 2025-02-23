import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class JqueryService {
    constructor() {
        if (!window.$) {
            window.$ = window.jQuery; // Asegúrate de que jQuery esté asignado
        }
    }
    useJQuery() {
        // Aquí puedes exponer métodos que usen jQuery
        return window.$;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: JqueryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: JqueryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: JqueryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnMvY29tbW9ucy1saWIvc3JjL2xpYi9zZXJ2aWNlL2pxdWVyeS1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFhM0MsTUFBTSxPQUFPLGFBQWE7SUFFeEI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNiLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLHdDQUF3QztTQUNuRTtJQUNILENBQUM7SUFFTSxTQUFTO1FBQ2QsOENBQThDO1FBQzlDLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDOytHQVhVLGFBQWE7bUhBQWIsYUFBYSxjQUhaLE1BQU07OzRGQUdQLGFBQWE7a0JBSnpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgJDogYW55O1xyXG4gICAgalF1ZXJ5OiBhbnk7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSnF1ZXJ5U2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKCF3aW5kb3cuJCkge1xyXG4gICAgICB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnk7IC8vIEFzZWfDunJhdGUgZGUgcXVlIGpRdWVyeSBlc3TDqSBhc2lnbmFkb1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVzZUpRdWVyeSgpIHtcclxuICAgIC8vIEFxdcOtIHB1ZWRlcyBleHBvbmVyIG3DqXRvZG9zIHF1ZSB1c2VuIGpRdWVyeVxyXG4gICAgcmV0dXJuIHdpbmRvdy4kO1xyXG4gIH1cclxuXHJcbn1cclxuIl19