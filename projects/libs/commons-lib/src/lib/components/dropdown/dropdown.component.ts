import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownItemModel } from '../../models/dropdown.model';

@Component({
  selector: 'lib-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
    @Input() placeholder!: string;
    @Input() emptyItemsLabel!: string;
    @Input() items: DropdownItemModel[] = [];
    @Input() disabled: boolean = false;

    @Output() mainButtonClick = new EventEmitter<void>();
    @Output() actionButtonClick = new EventEmitter<DropdownItemModel>();

    onClickMainButton() {
        this.mainButtonClick.emit();
    }

    onClickActionButton(item: DropdownItemModel) {
        this.actionButtonClick.emit(item);
    }
}