import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ApiEnum } from '../../enum/commons.enum';
import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/common";
const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BrowserComponent),
    multi: true,
};
export class BrowserComponent {
    constructor(translate, http) {
        this.translate = translate;
        this.http = http;
        this.placeHolder = 'Browser.LookFor';
        this.addItem = false;
        this.onItemSelected = new EventEmitter(); // Evento para emitir el ítem seleccionado
        this.items = [];
        this.selectedItem = null;
        this.error = null;
        this.value = null;
        this.isDisabled = false;
        this.onChangeFn = () => { };
        this.onTouchedFn = () => { };
        this.inputSubject = new Subject();
        // Configurar el manejo de las entradas del usuario
        this.inputSubscription = this.inputSubject
            .pipe(debounceTime(300), // Espera 300 ms después de la última entrada
        distinctUntilChanged(), // Evita llamadas si el valor no cambia
        switchMap((filter) => this.callApi(filter).pipe(catchError((error) => {
            this.error = error.message || 'Error desconocido';
            return of([]); // Devuelve un array vacío para continuar el flujo
        }))))
            .subscribe((response) => {
            this.error = null; // Limpia el error en caso de éxito
            if (response.length == 0 && this.addItem)
                response.push({ text: 'Agregar item', id: '-1', args: 'addItem' });
            this.items = response;
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
    onInput(event) {
        const inputValue = event.target.value;
        this.value = { text: inputValue, id: '' }; // Solo el texto al principio
        // Notifica el cambio al formulario
        this.onChangeFn(this.value);
        // Emite el valor ingresado para manejarlo con debounceTime
        this.inputSubject.next(inputValue);
    }
    callApi(filter) {
        const apiUrl = `${ApiEnum.Browser}GetBrowserNotTenant/${this.browserId}/${filter}`;
        return this.http.get(apiUrl);
    }
    ngOnDestroy() {
        // Limpia la suscripción al destruir el componente
        this.inputSubscription.unsubscribe();
    }
    // Función para manejar la selección de un item
    onSelectItem(item) {
        if (item.id == '-1' && this.addItem) {
            this.items = []; // Limpia las sugerencias
            this.onItemSelected.emit(item); // Emitir el ítem seleccionado
            return;
        }
        this.selectedItem = item;
        this.value = item; // Establece el valor seleccionado
        this.onChangeFn(item); // Notifica al formulario
        this.items = []; // Limpia las sugerencias
    }
    clearSelected() {
        this.selectedItem = null;
        this.value = null; // Limpia el valor del campo
        this.items = []; // Limpia las sugerencias
        this.onChangeFn(null); // Notifica al formulario el cambio a vacío
    }
    selectItem() {
        return this.selectedItem;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BrowserComponent, deps: [{ token: i1.TranslateService }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BrowserComponent, isStandalone: true, selector: "lib-browser", inputs: { browserId: "browserId", placeHolder: "placeHolder", addItem: "addItem" }, outputs: { onItemSelected: "onItemSelected" }, providers: [VALUE_ACCESSOR], ngImport: i0, template: "<div class=\"position-relative\">      \r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-text\">\r\n        <i class=\"fa fa-search\"></i>\r\n      </span>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"{{ placeHolder | translate}}\"\r\n        [value]=\"value?.text\"\r\n        [disabled]=\"isDisabled\"\r\n        (input)=\"onInput($event)\"\r\n        (blur)=\"onTouchedFn()\" />\r\n      <span *ngIf=\"selectedItem\" class=\"input-group-text\" (click)=\"clearSelected()\" >x</span>\r\n    </div>\r\n    <ul *ngIf=\"items.length > 0\" class=\"list-group position-absolute mt-1 items-dropdown\">\r\n      <li *ngFor=\"let item of items\" \r\n        class=\"list-group-item list-group-item-action\" \r\n        [ngClass]=\"(item.id == '-1') ? item.args : '' \" \r\n        (click)=\"onSelectItem(item)\">\r\n        {{ item.text }}\r\n      </li>\r\n    </ul>\r\n</div>\r\n  \r\n\r\n", styles: [".position-relative{position:relative}.items-dropdown{width:100%;z-index:1000;max-height:200px;overflow-y:auto;box-shadow:0 4px 8px #0000001a;cursor:pointer}.addItem{color:#48abf7;text-decoration:underline}\n"], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BrowserComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-browser', standalone: true, imports: [TranslateModule, CommonModule], providers: [VALUE_ACCESSOR], template: "<div class=\"position-relative\">      \r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-text\">\r\n        <i class=\"fa fa-search\"></i>\r\n      </span>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"{{ placeHolder | translate}}\"\r\n        [value]=\"value?.text\"\r\n        [disabled]=\"isDisabled\"\r\n        (input)=\"onInput($event)\"\r\n        (blur)=\"onTouchedFn()\" />\r\n      <span *ngIf=\"selectedItem\" class=\"input-group-text\" (click)=\"clearSelected()\" >x</span>\r\n    </div>\r\n    <ul *ngIf=\"items.length > 0\" class=\"list-group position-absolute mt-1 items-dropdown\">\r\n      <li *ngFor=\"let item of items\" \r\n        class=\"list-group-item list-group-item-action\" \r\n        [ngClass]=\"(item.id == '-1') ? item.args : '' \" \r\n        (click)=\"onSelectItem(item)\">\r\n        {{ item.text }}\r\n      </li>\r\n    </ul>\r\n</div>\r\n  \r\n\r\n", styles: [".position-relative{position:relative}.items-dropdown{width:100%;z-index:1000;max-height:200px;overflow-y:auto;box-shadow:0 4px 8px #0000001a;cursor:pointer}.addItem{color:#48abf7;text-decoration:underline}\n"] }]
        }], ctorParameters: () => [{ type: i1.TranslateService }, { type: i2.HttpClient }], propDecorators: { browserId: [{
                type: Input
            }], placeHolder: [{
                type: Input
            }], addItem: [{
                type: Input
            }], onItemSelected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJzL2NvbW1vbnMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icm93c2VyL2Jyb3dzZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicy9jb21tb25zLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnJvd3Nlci9icm93c2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFpQixNQUFNLHlCQUF5QixDQUFDO0FBRWpFLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFM0YsTUFBTSxjQUFjLEdBQUc7SUFDckIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQVVGLE1BQU0sT0FBTyxnQkFBZ0I7SUFxQjNCLFlBQ1MsU0FBMkIsRUFDakIsSUFBZ0I7UUFEMUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDakIsU0FBSSxHQUFKLElBQUks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QUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLGFBRzdCLENBQUMsY0FBYyxDQUFDOzhHQUlsQixTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUVJLGNBQWM7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEFwaUVudW0sIEJyb3dzZXJJZEVudW0gfSBmcm9tICcuLi8uLi9lbnVtL2NvbW1vbnMuZW51bSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgVkFMVUVfQUNDRVNTT1IgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnJvd3NlckNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWUsXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1icm93c2VyJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtUcmFuc2xhdGVNb2R1bGUsIENvbW1vbk1vZHVsZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jyb3dzZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9icm93c2VyLmNvbXBvbmVudC5jc3MnLFxyXG4gIHByb3ZpZGVyczogW1ZBTFVFX0FDQ0VTU09SXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJyb3dzZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIEBJbnB1dCgpIGJyb3dzZXJJZCE6IEJyb3dzZXJJZEVudW07XHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZyA9ICdCcm93c2VyLkxvb2tGb3InO1xyXG4gIEBJbnB1dCgpIGFkZEl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIG9uSXRlbVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7IHRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgYXJncz86IHN0cmluZyB9PigpOyAvLyBFdmVudG8gcGFyYSBlbWl0aXIgZWwgw610ZW0gc2VsZWNjaW9uYWRvXHJcblxyXG4gIHB1YmxpYyBpdGVtczogeyB0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGFyZ3M/OiBzdHJpbmcgfVtdID0gW107XHJcbiAgcHVibGljIHNlbGVjdGVkSXRlbTogYW55ID0gbnVsbDtcclxuXHJcbiAgZXJyb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIHZhbHVlOiB7IHRleHQ6IHN0cmluZywgaWQ6IHN0cmluZywgYXJncz86IHN0cmluZyB9IHwgbnVsbCA9IG51bGw7XHJcbiAgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBvbkNoYW5nZUZuOiAodmFsdWU6IHsgdGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBhcmdzPzogc3RyaW5nIH0gfCBudWxsKSA9PiB2b2lkID0gKCkgPT4ge307XHJcbiAgb25Ub3VjaGVkRm46ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBpbnB1dFN1YmplY3QgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBpbnB1dFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHJcbiAgICAvLyBDb25maWd1cmFyIGVsIG1hbmVqbyBkZSBsYXMgZW50cmFkYXMgZGVsIHVzdWFyaW9cclxuICAgIHRoaXMuaW5wdXRTdWJzY3JpcHRpb24gPSB0aGlzLmlucHV0U3ViamVjdFxyXG4gICAgLnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSgzMDApLCAvLyBFc3BlcmEgMzAwIG1zIGRlc3B1w6lzIGRlIGxhIMO6bHRpbWEgZW50cmFkYVxyXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLCAvLyBFdml0YSBsbGFtYWRhcyBzaSBlbCB2YWxvciBubyBjYW1iaWFcclxuICAgICAgc3dpdGNoTWFwKChmaWx0ZXIpID0+IHRoaXMuY2FsbEFwaShmaWx0ZXIpLnBpcGUoXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvci5tZXNzYWdlIHx8ICdFcnJvciBkZXNjb25vY2lkbyc7XHJcbiAgICAgICAgICByZXR1cm4gb2YoW10pOyAvLyBEZXZ1ZWx2ZSB1biBhcnJheSB2YWPDrW8gcGFyYSBjb250aW51YXIgZWwgZmx1am9cclxuICAgICAgICB9KVxyXG4gICAgICApKVxyXG4gICAgKVxyXG4gICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IHsgdGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBhcmdzPzogc3RyaW5nIH1bXSkgPT4ge1xyXG4gICAgICB0aGlzLmVycm9yID0gbnVsbDsgLy8gTGltcGlhIGVsIGVycm9yIGVuIGNhc28gZGUgw6l4aXRvXHJcbiAgICAgIGlmKHJlc3BvbnNlLmxlbmd0aCA9PSAwICYmIHRoaXMuYWRkSXRlbSlcclxuICAgICAgICByZXNwb25zZS5wdXNoKHsgdGV4dDogJ0FncmVnYXIgaXRlbScsIGlkOiAnLTEnLCBhcmdzOiAnYWRkSXRlbScgfSk7XHJcblxyXG4gICAgICB0aGlzLml0ZW1zID0gcmVzcG9uc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHsgdGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBhcmdzPzogc3RyaW5nIH0gfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogeyB0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGFyZ3M/OiBzdHJpbmcgfSB8IG51bGwpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBvbklucHV0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlID0geyB0ZXh0OiBpbnB1dFZhbHVlLCBpZDogJycgfTsgLy8gU29sbyBlbCB0ZXh0byBhbCBwcmluY2lwaW9cclxuICAgIC8vIE5vdGlmaWNhIGVsIGNhbWJpbyBhbCBmb3JtdWxhcmlvXHJcbiAgICB0aGlzLm9uQ2hhbmdlRm4odGhpcy52YWx1ZSk7XHJcblxyXG4gICAgLy8gRW1pdGUgZWwgdmFsb3IgaW5ncmVzYWRvIHBhcmEgbWFuZWphcmxvIGNvbiBkZWJvdW5jZVRpbWVcclxuICAgIHRoaXMuaW5wdXRTdWJqZWN0Lm5leHQoaW5wdXRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGxBcGkoZmlsdGVyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHsgdGV4dDogc3RyaW5nLCBpZDogc3RyaW5nLCBhcmdzPzogc3RyaW5nIH1bXT4ge1xyXG4gICAgY29uc3QgYXBpVXJsID0gYCR7QXBpRW51bS5Ccm93c2VyfUdldEJyb3dzZXJOb3RUZW5hbnQvJHt0aGlzLmJyb3dzZXJJZH0vJHtmaWx0ZXJ9YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueVtdPihhcGlVcmwpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAvLyBMaW1waWEgbGEgc3VzY3JpcGNpw7NuIGFsIGRlc3RydWlyIGVsIGNvbXBvbmVudGVcclxuICAgIHRoaXMuaW5wdXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8vIEZ1bmNpw7NuIHBhcmEgbWFuZWphciBsYSBzZWxlY2Npw7NuIGRlIHVuIGl0ZW1cclxuICBvblNlbGVjdEl0ZW0oaXRlbTogeyB0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGFyZ3M/OiBzdHJpbmcgfSk6IHZvaWQge1xyXG4gICAgaWYoaXRlbS5pZCA9PSAnLTEnICYmIHRoaXMuYWRkSXRlbSkge1xyXG4gICAgICB0aGlzLml0ZW1zID0gW107IC8vIExpbXBpYSBsYXMgc3VnZXJlbmNpYXNcclxuICAgICAgdGhpcy5vbkl0ZW1TZWxlY3RlZC5lbWl0KGl0ZW0pOyAvLyBFbWl0aXIgZWwgw610ZW0gc2VsZWNjaW9uYWRvXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgIHRoaXMudmFsdWUgPSBpdGVtOyAvLyBFc3RhYmxlY2UgZWwgdmFsb3Igc2VsZWNjaW9uYWRvXHJcbiAgICB0aGlzLm9uQ2hhbmdlRm4oaXRlbSk7IC8vIE5vdGlmaWNhIGFsIGZvcm11bGFyaW9cclxuICAgIHRoaXMuaXRlbXMgPSBbXTsgLy8gTGltcGlhIGxhcyBzdWdlcmVuY2lhc1xyXG4gIH1cclxuXHJcbiAgY2xlYXJTZWxlY3RlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcclxuICAgIHRoaXMudmFsdWUgPSBudWxsOyAvLyBMaW1waWEgZWwgdmFsb3IgZGVsIGNhbXBvXHJcbiAgICB0aGlzLml0ZW1zID0gW107IC8vIExpbXBpYSBsYXMgc3VnZXJlbmNpYXNcclxuICAgIHRoaXMub25DaGFuZ2VGbihudWxsKTsgLy8gTm90aWZpY2EgYWwgZm9ybXVsYXJpbyBlbCBjYW1iaW8gYSB2YWPDrW9cclxuICB9XHJcblxyXG4gIHNlbGVjdEl0ZW0oKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPiAgICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9pPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBwbGFjZUhvbGRlciB8IHRyYW5zbGF0ZX19XCJcclxuICAgICAgICBbdmFsdWVdPVwidmFsdWU/LnRleHRcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcclxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCJcclxuICAgICAgICAoYmx1cik9XCJvblRvdWNoZWRGbigpXCIgLz5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJzZWxlY3RlZEl0ZW1cIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiAoY2xpY2spPVwiY2xlYXJTZWxlY3RlZCgpXCIgPng8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDx1bCAqbmdJZj1cIml0ZW1zLmxlbmd0aCA+IDBcIiBjbGFzcz1cImxpc3QtZ3JvdXAgcG9zaXRpb24tYWJzb2x1dGUgbXQtMSBpdGVtcy1kcm9wZG93blwiPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBcclxuICAgICAgICBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCIgXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiKGl0ZW0uaWQgPT0gJy0xJykgPyBpdGVtLmFyZ3MgOiAnJyBcIiBcclxuICAgICAgICAoY2xpY2spPVwib25TZWxlY3RJdGVtKGl0ZW0pXCI+XHJcbiAgICAgICAge3sgaXRlbS50ZXh0IH19XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG48L2Rpdj5cclxuICBcclxuXHJcbiJdfQ==