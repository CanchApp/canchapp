import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { SelectIdEnum } from '../../enum/commons.enum';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
type optionValue = {
    text: string;
    id: string;
    args?: string;
};
export declare class SelectComponent implements ControlValueAccessor, OnInit {
    translate: TranslateService;
    private readonly http;
    selectId: SelectIdEnum;
    placeHolder: string;
    empty: boolean;
    useCustomItems: boolean;
    items: optionValue[];
    error: string | null;
    defaultValue: optionValue;
    value: optionValue;
    isDisabled: boolean;
    onChangeFn: (value: optionValue) => void;
    onTouchedFn: () => void;
    private selectSubscription;
    constructor(translate: TranslateService, http: HttpClient);
    ngOnInit(): void;
    writeValue(value: optionValue): void;
    registerOnChange(fn: (value: optionValue) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState?(isDisabled: boolean): void;
    onChange($event: any): void;
    onTouched(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent, "lib-select", never, { "selectId": { "alias": "selectId"; "required": false; }; "placeHolder": { "alias": "placeHolder"; "required": false; }; "empty": { "alias": "empty"; "required": false; }; "useCustomItems": { "alias": "useCustomItems"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
