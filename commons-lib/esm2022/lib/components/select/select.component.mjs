import { Component, forwardRef, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ApiEnum } from '../../enum/commons.enum';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
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
        this.useCustomItems = false;
        this.items = [];
        this.error = null;
        this.defaultValue = { text: '', id: '-1' };
        this.value = { text: '', id: '-1' };
        this.isDisabled = false;
        this.onChangeFn = () => { };
        this.onTouchedFn = () => { };
    }
    ngOnInit() {
        if (!this.useCustomItems) {
            const apiUrl = `${ApiEnum.Select}GetSelect/${this.selectId}`;
            this.selectSubscription = this.http.get(apiUrl).subscribe((response) => {
                this.items = response;
                if (!this.empty && this.items.length > 0) {
                    this.writeValue(this.items[0]);
                    this.onChangeFn(this.items[0]);
                }
            });
        }
    }
    writeValue(value) {
        this.value = value || this.defaultValue;
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
            this.onChangeFn(this.defaultValue);
        }
        this.onTouchedFn();
    }
    onTouched() {
        this.onTouchedFn();
    }
    ngOnDestroy() {
        // Limpia la suscripción al destruir el componente
        this.selectSubscription?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SelectComponent, deps: [{ token: i1.TranslateService }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: SelectComponent, isStandalone: true, selector: "lib-select", inputs: { selectId: "selectId", placeHolder: "placeHolder", empty: "empty", useCustomItems: "useCustomItems" }, providers: [VALUE_ACCESSOR], ngImport: i0, template: "<select \r\n  class=\"form-select\" \r\n  aria-label=\"Default select\" \r\n  [disabled]=\"isDisabled\"\r\n  [(ngModel)]=\"value.id\"\r\n  (change)=\"onChange($event)\">\r\n    <option *ngIf=\"empty\" value=\"-1\">{{ placeHolder | translate}}</option>\r\n    <option *ngFor=\"let item of items\" [value]=\"item.id\">{{ item.text }}</option>\r\n  </select>\r\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-select', standalone: true, imports: [TranslateModule, CommonModule, FormsModule], providers: [VALUE_ACCESSOR], template: "<select \r\n  class=\"form-select\" \r\n  aria-label=\"Default select\" \r\n  [disabled]=\"isDisabled\"\r\n  [(ngModel)]=\"value.id\"\r\n  (change)=\"onChange($event)\">\r\n    <option *ngIf=\"empty\" value=\"-1\">{{ placeHolder | translate}}</option>\r\n    <option *ngFor=\"let item of items\" [value]=\"item.id\">{{ item.text }}</option>\r\n  </select>\r\n" }]
        }], ctorParameters: () => [{ type: i1.TranslateService }, { type: i2.HttpClient }], propDecorators: { selectId: [{
                type: Input
            }], placeHolder: [{
                type: Input
            }], empty: [{
                type: Input
            }], useCustomItems: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnMvY29tbW9ucy1saWIvc3JjL2xpYi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicy9jb21tb25zLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUF3QixXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFvQixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7QUFHeEUsTUFBTSxjQUFjLEdBQUc7SUFDckIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFZRixNQUFNLE9BQU8sZUFBZTtJQWtCMUIsWUFDUyxTQUEyQixFQUNqQixJQUFnQjtRQUQxQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUNqQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBakIxQixnQkFBVyxHQUFXLHFCQUFxQixDQUFDO1FBQzVDLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFFbEMsVUFBSyxHQUFrQixFQUFFLENBQUM7UUFDakMsVUFBSyxHQUFrQixJQUFJLENBQUM7UUFD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Q29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1zTW9kdWxlLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFwaUVudW0sIFNlbGVjdElkRW51bSB9IGZyb20gJy4uLy4uL2VudW0vY29tbW9ucy5lbnVtJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5jb25zdCBWQUxVRV9BQ0NFU1NPUiA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWxlY3RDb21wb25lbnQpLFxyXG4gIG11bHRpOiB0cnVlLFxyXG59O1xyXG5cclxudHlwZSBvcHRpb25WYWx1ZSA9IHsgdGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBhcmdzPzogc3RyaW5nIH07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zZWxlY3QnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1RyYW5zbGF0ZU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuY3NzJyxcclxuICBwcm92aWRlcnM6IFtWQUxVRV9BQ0NFU1NPUl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc2VsZWN0SWQhOiBTZWxlY3RJZEVudW07XHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZyA9ICdTZWxlY3QuU2VsZWN0T3B0aW9uJztcclxuICBASW5wdXQoKSBlbXB0eTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgdXNlQ3VzdG9tSXRlbXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGl0ZW1zOiBvcHRpb25WYWx1ZVtdID0gW107XHJcbiAgZXJyb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIGRlZmF1bHRWYWx1ZTogb3B0aW9uVmFsdWUgPSB7IHRleHQ6ICcnLCBpZDogJy0xJyB9O1xyXG4gIHZhbHVlOiBvcHRpb25WYWx1ZSA9IHsgdGV4dDogJycsIGlkOiAnLTEnIH07XHJcbiAgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBvbkNoYW5nZUZuOiAodmFsdWU6IG9wdGlvblZhbHVlKSA9PiB2b2lkID0gKCkgPT4ge307XHJcbiAgb25Ub3VjaGVkRm46ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZighdGhpcy51c2VDdXN0b21JdGVtcykge1xyXG4gICAgICBjb25zdCBhcGlVcmwgPSBgJHtBcGlFbnVtLlNlbGVjdH1HZXRTZWxlY3QvJHt0aGlzLnNlbGVjdElkfWA7XHJcbiAgICAgIHRoaXMuc2VsZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5odHRwLmdldDxhbnlbXT4oYXBpVXJsKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlO1xyXG4gICAgICAgIGlmKCF0aGlzLmVtcHR5ICYmIHRoaXMuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuaXRlbXNbMF0pO1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKHRoaXMuaXRlbXNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG9wdGlvblZhbHVlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgdGhpcy5kZWZhdWx0VmFsdWU7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IG9wdGlvblZhbHVlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZEZuID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoJGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09ICRldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgIGlmIChpdGVtKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VGbihpdGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VGbih0aGlzLmRlZmF1bHRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uVG91Y2hlZEZuKCk7XHJcbiAgfVxyXG5cclxuICBvblRvdWNoZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZEZuKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vIExpbXBpYSBsYSBzdXNjcmlwY2nDs24gYWwgZGVzdHJ1aXIgZWwgY29tcG9uZW50ZVxyXG4gICAgdGhpcy5zZWxlY3RTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8c2VsZWN0IFxyXG4gIGNsYXNzPVwiZm9ybS1zZWxlY3RcIiBcclxuICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3RcIiBcclxuICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXHJcbiAgWyhuZ01vZGVsKV09XCJ2YWx1ZS5pZFwiXHJcbiAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICA8b3B0aW9uICpuZ0lmPVwiZW1wdHlcIiB2YWx1ZT1cIi0xXCI+e3sgcGxhY2VIb2xkZXIgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxyXG4gICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIFt2YWx1ZV09XCJpdGVtLmlkXCI+e3sgaXRlbS50ZXh0IH19PC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiJdfQ==