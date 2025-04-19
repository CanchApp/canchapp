import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BrowserIdEnum } from '../../enum/commons.enum';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class BrowserComponent implements ControlValueAccessor {
    translate: TranslateService;
    private readonly http;
    browserId: BrowserIdEnum;
    placeHolder: string;
    addItem: boolean;
    onItemSelected: EventEmitter<{
        text: string;
        id: string;
        args?: string | undefined;
    }>;
    items: {
        text: string;
        id: string;
        args?: string;
    }[];
    selectedItem: any;
    error: string | null;
    value: {
        text: string;
        id: string;
        args?: string;
    } | null;
    isDisabled: boolean;
    onChangeFn: (value: {
        text: string;
        id: string;
        args?: string;
    } | null) => void;
    onTouchedFn: () => void;
    private readonly inputSubject;
    private readonly inputSubscription;
    constructor(translate: TranslateService, http: HttpClient);
    writeValue(value: {
        text: string;
        id: string;
        args?: string;
    } | null): void;
    registerOnChange(fn: (value: {
        text: string;
        id: string;
        args?: string;
    } | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState?(isDisabled: boolean): void;
    onInput(event: Event): void;
    private callApi;
    ngOnDestroy(): void;
    onSelectItem(item: {
        text: string;
        id: string;
        args?: string;
    }): void;
    clearSelected(): void;
    selectItem(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<BrowserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BrowserComponent, "lib-browser", never, { "browserId": { "alias": "browserId"; "required": false; }; "placeHolder": { "alias": "placeHolder"; "required": false; }; "addItem": { "alias": "addItem"; "required": false; }; }, { "onItemSelected": "onItemSelected"; }, never, never, true, never>;
}
