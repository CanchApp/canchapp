import * as i0 from '@angular/core';
import { Injectable, forwardRef, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i1 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import * as i2 from '@angular/common/http';

var ApiEnum;
(function (ApiEnum) {
    ApiEnum["Customer"] = "http://localhost:5194/api/Customer/";
    ApiEnum["Report"] = "http://localhost:5195/api/Report/";
    ApiEnum["DashBoard"] = "http://localhost:5195/api/DashBoard/";
    ApiEnum["Booking"] = "http://localhost:5196/api/Booking/";
    ApiEnum["Security"] = "http://localhost:5197/api/Security/";
    ApiEnum["Company"] = "http://localhost:5198/api/Company/";
    ApiEnum["Browser"] = "http://localhost:5199/api/Browser/";
    ApiEnum["Select"] = "http://localhost:5199/api/Select/";
    ApiEnum["HoliDay"] = "http://localhost:5199/api/HoliDay/";
    ApiEnum["Court"] = "http://localhost:5199/api/Court/";
})(ApiEnum || (ApiEnum = {}));
var NotificationTypeEnum;
(function (NotificationTypeEnum) {
    NotificationTypeEnum["Succes"] = "success";
    NotificationTypeEnum["Default"] = "default";
    NotificationTypeEnum["Primary"] = "primary";
    NotificationTypeEnum["Secondary"] = "secondary";
    NotificationTypeEnum["Warning"] = "warning";
    NotificationTypeEnum["Danger"] = "danger";
    NotificationTypeEnum["Info"] = "info";
})(NotificationTypeEnum || (NotificationTypeEnum = {}));
var PlacementFromEnum;
(function (PlacementFromEnum) {
    PlacementFromEnum["Top"] = "top";
    PlacementFromEnum["Bottom"] = "bottom";
})(PlacementFromEnum || (PlacementFromEnum = {}));
var PlacementAlignEnum;
(function (PlacementAlignEnum) {
    PlacementAlignEnum["Left"] = "left";
    PlacementAlignEnum["Right"] = "right";
    PlacementAlignEnum["Center"] = "center";
})(PlacementAlignEnum || (PlacementAlignEnum = {}));
var PaymentTypeEnum;
(function (PaymentTypeEnum) {
    PaymentTypeEnum[PaymentTypeEnum["None"] = 0] = "None";
    PaymentTypeEnum[PaymentTypeEnum["Cash"] = 1] = "Cash";
    PaymentTypeEnum[PaymentTypeEnum["Debit"] = 2] = "Debit";
    PaymentTypeEnum[PaymentTypeEnum["Credit"] = 3] = "Credit";
})(PaymentTypeEnum || (PaymentTypeEnum = {}));
var PaymentStatusEnum;
(function (PaymentStatusEnum) {
    PaymentStatusEnum[PaymentStatusEnum["None"] = 0] = "None";
    PaymentStatusEnum[PaymentStatusEnum["Pending"] = 1] = "Pending";
    PaymentStatusEnum[PaymentStatusEnum["Paid"] = 2] = "Paid";
})(PaymentStatusEnum || (PaymentStatusEnum = {}));
var BrowserIdEnum;
(function (BrowserIdEnum) {
    BrowserIdEnum["BrowserCustomer"] = "BrowserCustomer";
})(BrowserIdEnum || (BrowserIdEnum = {}));
var SelectIdEnum;
(function (SelectIdEnum) {
    SelectIdEnum["ListCourt"] = "ListCourt";
})(SelectIdEnum || (SelectIdEnum = {}));
var ActionEnum;
(function (ActionEnum) {
    ActionEnum[ActionEnum["None"] = 0] = "None";
    ActionEnum[ActionEnum["Create"] = 1] = "Create";
    ActionEnum[ActionEnum["Edit"] = 2] = "Edit";
    ActionEnum[ActionEnum["Detail"] = 3] = "Detail";
    ActionEnum[ActionEnum["Delete"] = 4] = "Delete";
})(ActionEnum || (ActionEnum = {}));
var CodeErrorEnum;
(function (CodeErrorEnum) {
    /* Error general  */
    CodeErrorEnum[CodeErrorEnum["InternalServerError"] = 100] = "InternalServerError";
    /* Error Reservas  */
    CodeErrorEnum[CodeErrorEnum["BookingNotAvailable"] = 101] = "BookingNotAvailable";
    CodeErrorEnum[CodeErrorEnum["BookingNotFound"] = 102] = "BookingNotFound";
    CodeErrorEnum[CodeErrorEnum["BookingPaid"] = 103] = "BookingPaid";
    CodeErrorEnum[CodeErrorEnum["BookingDateStartMustBeGreater"] = 104] = "BookingDateStartMustBeGreater";
    /* Error Canchas  */
    CodeErrorEnum[CodeErrorEnum["CourtWithRecords"] = 201] = "CourtWithRecords";
    CodeErrorEnum[CodeErrorEnum["CourtNotFound"] = 202] = "CourtNotFound";
})(CodeErrorEnum || (CodeErrorEnum = {}));
var DayEnum;
(function (DayEnum) {
    DayEnum[DayEnum["Monday"] = 1] = "Monday";
    DayEnum[DayEnum["Tuesday"] = 2] = "Tuesday";
    DayEnum[DayEnum["Wednesday"] = 3] = "Wednesday";
    DayEnum[DayEnum["Thursday"] = 4] = "Thursday";
    DayEnum[DayEnum["Friday"] = 5] = "Friday";
    DayEnum[DayEnum["Saturday"] = 6] = "Saturday";
    DayEnum[DayEnum["Sunday"] = 7] = "Sunday";
})(DayEnum || (DayEnum = {}));

/**
 * @property {number} delay - Tiempo que demora en estar visible la notificación.
 * @property {string} title - Titulo a mostrar en la notificación.
 * @property {string} message Texto a mostrar en la notificación.
 * @property {string} icon Icono a mostrar en la notificación.
 * @property {NotificationType} type Tipo de notificación.
 * @property {PlacementFrom} placementFrom Colocación de la notificación.
 * @property {placementAlign} placementAlign Alineacion de la notificación.
 */
class Notifications {
    constructor() {
        this.delay = 3000;
        this.title = '';
        this.message = '';
        this.icon = 'none';
        this.type = NotificationTypeEnum.Default;
        this.placementFrom = PlacementFromEnum.Top;
        this.placementAlign = PlacementAlignEnum.Right;
    }
}

class JqueryService {
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

class NotificationService {
    constructor(jqueryService) {
        this.jqueryService = jqueryService;
        this.$ = this.jqueryService.useJQuery();
    }
    /**
   * Genera una notificacion.
   * @param {Notifications}  notificacion - Objeto configuración de la notificación.
   */
    showCustomNotification(notification) {
        this.$.notify(notification, {
            type: notification.type,
            placement: {
                from: notification.placementFrom,
                align: notification.placementAlign
            },
            time: 1000,
            delay: notification.delay,
        });
    }
    /**
     * Genera una notificacion con plantilla exitosa.
     * @param _message - Mensaje a mostrar en la notificación.
     */
    SuccesNotification(_message) {
        const notiSucces = new Notifications();
        notiSucces.message = _message;
        notiSucces.icon = 'fa-solid fa-check';
        notiSucces.type = NotificationTypeEnum.Succes;
        this.showCustomNotification(notiSucces);
    }
    /**
     * Genera una notificacion con plantilla informativa.
     * @param _title - Titulo de la notificación.
     * @param _message - Mensaje a mostrar en la notificación.
     */
    InfoNotification(_message) {
        const notiSucces = new Notifications();
        notiSucces.message = _message;
        notiSucces.icon = 'fa-solid fa-info';
        notiSucces.type = NotificationTypeEnum.Info;
        this.showCustomNotification(notiSucces);
    }
    /**
   * Genera una notificacion con plantilla de error.
   * @param _title - Titulo de la notificación.
   * @param _message - Mensaje a mostrar en la notificación.
   */
    ErrorNotification(_message) {
        const notiSucces = new Notifications();
        notiSucces.message = _message;
        notiSucces.icon = 'fa-solid fa-bell';
        notiSucces.type = NotificationTypeEnum.Danger;
        this.showCustomNotification(notiSucces);
    }
    /**
   * Genera una notificacion con plantilla de advertencia.
   * @param _title - Titulo de la notificación.
   * @param _message - Mensaje a mostrar en la notificación.
   */
    WarningNotification(_message) {
        const notiSucces = new Notifications();
        notiSucces.message = _message;
        notiSucces.icon = 'fa-solid fa-exclamation';
        notiSucces.type = NotificationTypeEnum.Warning;
        this.showCustomNotification(notiSucces);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NotificationService, deps: [{ token: JqueryService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NotificationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: JqueryService }] });

class CommonsLibService {
    constructor() { }
    getFormatIsoDate(date, time) {
        let _date = new Date(date);
        const year = _date.getFullYear();
        const month = String(_date.getMonth() + 1).padStart(2, '0');
        const day = String(_date.getDate()).padStart(2, '0');
        const hours = time.split(':')[0];
        const minutes = time.split(':')[1];
        const localISOString = `${year}-${month}-${day}T${hours}:${minutes}:00`;
        return localISOString;
    }
    getTime(date) {
        let _date = new Date(date);
        const hours = _date.getHours().toString().padStart(2, '0');
        const minutes = _date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}:00`;
    }
    getMonthText(numberMonth) {
        const monthText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthText[numberMonth];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CommonsLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CommonsLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CommonsLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

const VALUE_ACCESSOR$1 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BrowserComponent),
    multi: true,
};
class BrowserComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BrowserComponent, isStandalone: true, selector: "lib-browser", inputs: { browserId: "browserId", placeHolder: "placeHolder", addItem: "addItem" }, outputs: { onItemSelected: "onItemSelected" }, providers: [VALUE_ACCESSOR$1], ngImport: i0, template: "<div class=\"position-relative\">      \r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-text\">\r\n        <i class=\"fa fa-search\"></i>\r\n      </span>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"{{ placeHolder | translate}}\"\r\n        [value]=\"value?.text\"\r\n        [disabled]=\"isDisabled\"\r\n        (input)=\"onInput($event)\"\r\n        (blur)=\"onTouchedFn()\" />\r\n      <span *ngIf=\"selectedItem\" class=\"input-group-text\" (click)=\"clearSelected()\" >x</span>\r\n    </div>\r\n    <ul *ngIf=\"items.length > 0\" class=\"list-group position-absolute mt-1 items-dropdown\">\r\n      <li *ngFor=\"let item of items\" \r\n        class=\"list-group-item list-group-item-action\" \r\n        [ngClass]=\"(item.id == '-1') ? item.args : '' \" \r\n        (click)=\"onSelectItem(item)\">\r\n        {{ item.text }}\r\n      </li>\r\n    </ul>\r\n</div>\r\n  \r\n\r\n", styles: [".position-relative{position:relative}.items-dropdown{width:100%;z-index:1000;max-height:200px;overflow-y:auto;box-shadow:0 4px 8px #0000001a;cursor:pointer}.addItem{color:#48abf7;text-decoration:underline}\n"], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BrowserComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-browser', standalone: true, imports: [TranslateModule, CommonModule], providers: [VALUE_ACCESSOR$1], template: "<div class=\"position-relative\">      \r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-text\">\r\n        <i class=\"fa fa-search\"></i>\r\n      </span>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"{{ placeHolder | translate}}\"\r\n        [value]=\"value?.text\"\r\n        [disabled]=\"isDisabled\"\r\n        (input)=\"onInput($event)\"\r\n        (blur)=\"onTouchedFn()\" />\r\n      <span *ngIf=\"selectedItem\" class=\"input-group-text\" (click)=\"clearSelected()\" >x</span>\r\n    </div>\r\n    <ul *ngIf=\"items.length > 0\" class=\"list-group position-absolute mt-1 items-dropdown\">\r\n      <li *ngFor=\"let item of items\" \r\n        class=\"list-group-item list-group-item-action\" \r\n        [ngClass]=\"(item.id == '-1') ? item.args : '' \" \r\n        (click)=\"onSelectItem(item)\">\r\n        {{ item.text }}\r\n      </li>\r\n    </ul>\r\n</div>\r\n  \r\n\r\n", styles: [".position-relative{position:relative}.items-dropdown{width:100%;z-index:1000;max-height:200px;overflow-y:auto;box-shadow:0 4px 8px #0000001a;cursor:pointer}.addItem{color:#48abf7;text-decoration:underline}\n"] }]
        }], ctorParameters: () => [{ type: i1.TranslateService }, { type: i2.HttpClient }], propDecorators: { browserId: [{
                type: Input
            }], placeHolder: [{
                type: Input
            }], addItem: [{
                type: Input
            }], onItemSelected: [{
                type: Output
            }] } });

const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true,
};
class SelectComponent {
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

class DateComponent {
    constructor(jqueryService) {
        this.jqueryService = jqueryService;
        this.$ = this.jqueryService.useJQuery();
    }
    ngAfterViewInit() {
        this.$("#datepicker").datepicker();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DateComponent, deps: [{ token: JqueryService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: DateComponent, isStandalone: true, selector: "lib-date", ngImport: i0, template: "<input type=\"text\" id=\"datepicker\">\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-date', standalone: true, imports: [], template: "<input type=\"text\" id=\"datepicker\">\r\n" }]
        }], ctorParameters: () => [{ type: JqueryService }] });

class CommonsLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CommonsLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CommonsLibComponent, isStandalone: true, selector: "lib-commons-lib", ngImport: i0, template: `
    <p>
      commons-lib works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CommonsLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-commons-lib', standalone: true, imports: [], template: `
    <p>
      commons-lib works!
    </p>
  ` }]
        }] });

class CommonLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CommonLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: CommonLibModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CommonLibModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CommonLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

/*
 * Public API Surface of commons-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionEnum, ApiEnum, BrowserComponent, BrowserIdEnum, CodeErrorEnum, CommonLibModule, CommonsLibComponent, CommonsLibService, DateComponent, DayEnum, NotificationService, NotificationTypeEnum, Notifications, PaymentStatusEnum, PaymentTypeEnum, PlacementAlignEnum, PlacementFromEnum, SelectComponent, SelectIdEnum };
//# sourceMappingURL=commons-lib.mjs.map
