import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../service/jquery-service.service";
export class DateComponent {
    constructor(jqueryService) {
        this.jqueryService = jqueryService;
        this.$ = this.jqueryService.useJQuery();
    }
    ngAfterViewInit() {
        this.$("#datepicker").datepicker();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DateComponent, deps: [{ token: i1.JqueryService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: DateComponent, isStandalone: true, selector: "lib-date", ngImport: i0, template: "<input type=\"text\" id=\"datepicker\">\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-date', standalone: true, imports: [], template: "<input type=\"text\" id=\"datepicker\">\r\n" }]
        }], ctorParameters: () => [{ type: i1.JqueryService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJzL2NvbW1vbnMtbGliL3NyYy9saWIvY29tcG9uZW50cy9kYXRlL2RhdGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicy9jb21tb25zLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZGF0ZS9kYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFVekQsTUFBTSxPQUFPLGFBQWE7SUFJeEIsWUFBNkIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFGeEMsTUFBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7SUFJcEQsQ0FBQztJQUNELGVBQWU7UUFDYixJQUFJLENBQUMsQ0FBQyxDQUFFLGFBQWEsQ0FBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7K0dBVFUsYUFBYTttR0FBYixhQUFhLG9FQ1YxQiw2Q0FDQTs7NEZEU2EsYUFBYTtrQkFQekIsU0FBUzsrQkFDRSxVQUFVLGNBQ1IsSUFBSSxXQUNQLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSnF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvanF1ZXJ5LXNlcnZpY2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1kYXRlJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vZGF0ZS5jb21wb25lbnQuY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSAkID0gdGhpcy5qcXVlcnlTZXJ2aWNlLnVzZUpRdWVyeSgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGpxdWVyeVNlcnZpY2U6IEpxdWVyeVNlcnZpY2UpIHsgXHJcblxyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLiQoIFwiI2RhdGVwaWNrZXJcIiApLmRhdGVwaWNrZXIoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGF0ZXBpY2tlclwiPlxyXG4iXX0=