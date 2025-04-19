import { EventEmitter } from '@angular/core';
import { DropdownItemModel } from '../../models/dropdown.model';
import * as i0 from "@angular/core";
export declare class DropdownComponent {
    placeholder: string;
    emptyItemsLabel: string;
    items: DropdownItemModel[];
    disabled: boolean;
    mainButtonClick: EventEmitter<void>;
    actionButtonClick: EventEmitter<DropdownItemModel>;
    onClickMainButton(): void;
    onClickActionButton(item: DropdownItemModel): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "lib-dropdown", never, { "placeholder": { "alias": "placeholder"; "required": false; }; "emptyItemsLabel": { "alias": "emptyItemsLabel"; "required": false; }; "items": { "alias": "items"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "mainButtonClick": "mainButtonClick"; "actionButtonClick": "actionButtonClick"; }, never, never, true, never>;
}
