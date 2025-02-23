import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ApiEnum } from '../../enum/commons.enum';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/common";
const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true,
};
export class SelectComponent {
    constructor(translate, http) {
        this.translate = translate;
        this.http = http;
        this.placeHolder = 'Select.SelectOption';
        this.empty = true;
        this.items = [];
        this.error = null;
        this.value = null;
        this.isDisabled = false;
        this.onChangeFn = () => { };
        this.onTouchedFn = () => { };
    }
    ngOnInit() {
        const apiUrl = `${ApiEnum.Select}GetSelect/${this.selectId}`;
        this.selectSubscription = this.http.get(apiUrl).subscribe((response) => {
            this.items = response;
            if (!this.empty && this.items.length > 0) {
                this.writeValue(this.items[0]);
                this.onChangeFn(this.items[0]);
            }
        });
    }
    writeValue(value) {
        this.value = value || null;
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    onChange($event) {
        const item = this.items.find(item => item.id == $event.target.value);
        if (item) {
            this.onChangeFn(item);
        }
        else {
            this.onChangeFn(null);
        }
        this.onTouchedFn();
    }
    onTouched() {
        this.onTouchedFn();
    }
    ngOnDestroy() {
        // Limpia la suscripción al destruir el componente
        this.selectSubscription.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SelectComponent, deps: [{ token: i1.TranslateService }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SelectComponent, isStandalone: true, selector: "lib-select", inputs: { selectId: "selectId", placeHolder: "placeHolder", empty: "empty" }, providers: [VALUE_ACCESSOR], ngImport: i0, template: "<select \r\n  class=\"form-select\" \r\n  aria-label=\"Default select\" \r\n  [disabled]=\"isDisabled\"\r\n  [value]=\"value?.id\" \r\n  (change)=\"onChange($event)\">\r\n    <option *ngIf=\"empty\" value=\"-1\">{{ placeHolder | translate}}</option>\r\n    <option *ngFor=\"let item of items\" [value]=\"item.id\">{{ item.text }}</option>\r\n  </select>\r\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-select', standalone: true, imports: [TranslateModule, CommonModule], providers: [VALUE_ACCESSOR], template: "<select \r\n  class=\"form-select\" \r\n  aria-label=\"Default select\" \r\n  [disabled]=\"isDisabled\"\r\n  [value]=\"value?.id\" \r\n  (change)=\"onChange($event)\">\r\n    <option *ngIf=\"empty\" value=\"-1\">{{ placeHolder | translate}}</option>\r\n    <option *ngFor=\"let item of items\" [value]=\"item.id\">{{ item.text }}</option>\r\n  </select>\r\n" }]
        }], ctorParameters: () => [{ type: i1.TranslateService }, { type: i2.HttpClient }], propDecorators: { selectId: [{
                type: Input
            }], placeHolder: [{
                type: Input
            }], empty: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnMvY29tbW9ucy1saWIvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicy9jb21tb25zLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQW9CLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBR3hFLE1BQU0sY0FBYyxHQUFHO0lBQ3JCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7SUFDOUMsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBVUYsTUFBTSxPQUFPLGVBQWU7SUFnQjFCLFlBQ1MsU0FBMkIsRUFDakIsSUFBZ0I7UUFEMUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDakIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWYxQixnQkFBVyxHQUFXLHFCQUFxQixDQUFDO1FBQzVDLFVBQUssR0FBWSxJQUFJLENBQUM7UUFFeEIsVUFBSyxHQUFrRCxFQUFFLENBQUM7UUFDakUsVUFBSyxHQUFrQixJQUFJLENBQUM7UUFDNUIsVUFBSyxHQUF1RCxJQUFJLENBQUM7UUFDakUsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixlQUFVLEdBQXdFLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUMzRixnQkFBVyxHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQVFuQyxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sYUFBYSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzVFLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ3RCLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQXlEO1FBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBdUU7UUFDdEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGdCQUFnQixDQUFFLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUVsQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRSxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLGtCQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7K0dBcEVVLGVBQWU7bUdBQWYsZUFBZSx1SUFGZixDQUFDLGNBQWMsQ0FBQywwQkNwQjdCLHVXQVNBLHlERFFZLGVBQWUsMkZBQUUsWUFBWTs7NEZBSzVCLGVBQWU7a0JBUjNCLFNBQVM7K0JBQ0UsWUFBWSxjQUNWLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsYUFHN0IsQ0FBQyxjQUFjLENBQUM7OEdBSWxCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXBpRW51bSwgU2VsZWN0SWRFbnVtIH0gZnJvbSAnLi4vLi4vZW51bS9jb21tb25zLmVudW0nO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmNvbnN0IFZBTFVFX0FDQ0VTU09SID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlbGVjdENvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWUsXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zZWxlY3QnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1RyYW5zbGF0ZU1vZHVsZSwgQ29tbW9uTW9kdWxlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5jc3MnLFxyXG4gIHByb3ZpZGVyczogW1ZBTFVFX0FDQ0VTU09SXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBzZWxlY3RJZCE6IFNlbGVjdElkRW51bTtcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlcjogc3RyaW5nID0gJ1NlbGVjdC5TZWxlY3RPcHRpb24nO1xyXG4gIEBJbnB1dCgpIGVtcHR5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGl0ZW1zOiB7IHRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgYXJncz86IHN0cmluZyB9W10gPSBbXTtcclxuICBlcnJvcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgdmFsdWU6IHsgdGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBhcmdzPzogc3RyaW5nIH0gfCBudWxsID0gbnVsbDtcclxuICBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIG9uQ2hhbmdlRm46ICh2YWx1ZTogeyB0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGFyZ3M/OiBzdHJpbmcgfSB8IG51bGwpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuICBvblRvdWNoZWRGbjogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG5cclxuICBwcml2YXRlIHNlbGVjdFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGFwaVVybCA9IGAke0FwaUVudW0uU2VsZWN0fUdldFNlbGVjdC8ke3RoaXMuc2VsZWN0SWR9YDtcclxuICAgIHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5odHRwLmdldDxhbnlbXT4oYXBpVXJsKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSByZXNwb25zZTtcclxuICAgICAgaWYoIXRoaXMuZW1wdHkgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuaXRlbXNbMF0pO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VGbih0aGlzLml0ZW1zWzBdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHsgdGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBhcmdzPzogc3RyaW5nIH0gfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogeyB0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGFyZ3M/OiBzdHJpbmcgfSB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSgkZXZlbnQ6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09ICRldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgIGlmIChpdGVtKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VGbihpdGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VGbihudWxsKTtcclxuICAgIH1cclxuICAgIHRoaXMub25Ub3VjaGVkRm4oKTtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkRm4oKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgLy8gTGltcGlhIGxhIHN1c2NyaXBjacOzbiBhbCBkZXN0cnVpciBlbCBjb21wb25lbnRlXHJcbiAgICB0aGlzLnNlbGVjdFN1YnNjcmlwdGlvbiEudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxzZWxlY3QgXHJcbiAgY2xhc3M9XCJmb3JtLXNlbGVjdFwiIFxyXG4gIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdFwiIFxyXG4gIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcclxuICBbdmFsdWVdPVwidmFsdWU/LmlkXCIgXHJcbiAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICA8b3B0aW9uICpuZ0lmPVwiZW1wdHlcIiB2YWx1ZT1cIi0xXCI+e3sgcGxhY2VIb2xkZXIgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxyXG4gICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIFt2YWx1ZV09XCJpdGVtLmlkXCI+e3sgaXRlbS50ZXh0IH19PC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiJdfQ==