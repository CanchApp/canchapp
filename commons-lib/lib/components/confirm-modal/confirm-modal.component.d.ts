import { EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { ConfirmModalModel } from '../../models/confirm-modal.model';
import * as i0 from "@angular/core";
export declare class ConfirmModalComponent implements AfterViewInit {
    modalDelete: ElementRef;
    confirmModal: any;
    data: ConfirmModalModel;
    confirmButtonClick: EventEmitter<number>;
    cancelButtonClick: EventEmitter<number>;
    recordId: number;
    ngAfterViewInit(): void;
    onClickConfirmButton(): void;
    onClickCancelButton(): void;
    openModal(recordId: number): void;
    closeModal(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmModalComponent, "lib-confirm-modal", never, { "data": { "alias": "data"; "required": false; }; }, { "confirmButtonClick": "confirmButtonClick"; "cancelButtonClick": "cancelButtonClick"; }, never, never, true, never>;
}
