import * as i0 from "@angular/core";
declare global {
    interface Window {
        $: any;
        jQuery: any;
    }
}
export declare class JqueryService {
    constructor();
    useJQuery(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<JqueryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JqueryService>;
}
