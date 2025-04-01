import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalModel } from '../../models/confirm-modal.model';

declare let bootstrap: any;

@Component({
  selector: 'lib-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css',
})
export class ConfirmModalComponent implements AfterViewInit {
    @ViewChild('confirmModal', { static: true}) modalDelete!: ElementRef;
    confirmModal: any;

    @Input() data!: ConfirmModalModel;

    @Output() confirmButtonClick = new EventEmitter<number>();
    @Output() cancelButtonClick = new EventEmitter<number>();

    recordId: number = 0; // Id para identificar la fila cliqueada

    ngAfterViewInit(): void {
        this.confirmModal = new bootstrap.Modal(this.modalDelete.nativeElement);
    }

    onClickConfirmButton() {
        this.confirmButtonClick.emit(this.recordId);
    }

    onClickCancelButton() {
        this.cancelButtonClick.emit(this.recordId);
    }

    openModal(recordId: number): void {
        this.recordId = recordId;
        this.confirmModal.show();
    }

    closeModal(): void {
        this.recordId = 0;
        this.confirmModal.hide();
    }
}