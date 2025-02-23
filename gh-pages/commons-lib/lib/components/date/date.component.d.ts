import { AfterViewInit } from '@angular/core';
import { JqueryService } from '../../service/jquery-service.service';
import * as i0 from "@angular/core";
export declare class DateComponent implements AfterViewInit {
    private readonly jqueryService;
    private readonly $;
    constructor(jqueryService: JqueryService);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateComponent, "lib-date", never, {}, {}, never, never, true, never>;
}
