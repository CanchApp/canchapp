import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ApiEnum, SelectIdEnum } from '../../enum/commons.enum';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

const VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true,
};

type optionValue = { text: string, id: string, args?: string };

@Component({
  selector: 'lib-select',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  providers: [VALUE_ACCESSOR],
})
export class SelectComponent implements ControlValueAccessor, OnInit {

  @Input() selectId!: SelectIdEnum;
  @Input() placeHolder: string = 'Select.SelectOption';
  @Input() empty: boolean = true;
  @Input() useCustomItems: boolean = false;

  public items: optionValue[] = [];
  error: string | null = null;
  defaultValue: optionValue = { text: '', id: '-1' };
  value: optionValue = { text: '', id: '-1' };
  isDisabled: boolean = false;

  onChangeFn: (value: optionValue) => void = () => {};
  onTouchedFn: () => void = () => {};

  private selectSubscription: Subscription | undefined;

  constructor(
    public translate: TranslateService,
    private readonly http: HttpClient) {

  }

  ngOnInit(): void {
    if(!this.useCustomItems) {
      const apiUrl = `${ApiEnum.Select}GetSelect/${this.selectId}`;
      this.selectSubscription = this.http.get<any[]>(apiUrl).subscribe((response) => {
        this.items = response;
        if(!this.empty && this.items.length > 0) {
          this.writeValue(this.items[0]);
          this.onChangeFn(this.items[0]);
        }
      });
    }
  }
  
  writeValue(value: optionValue): void {
    this.value = value || this.defaultValue;
  }

  registerOnChange(fn: (value: optionValue) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChange($event: any): void {
    const item = this.items.find(item => item.id == $event.target.value);

    if (item) {
      this.onChangeFn(item);
    } else {
      this.onChangeFn(this.defaultValue);
    }
    this.onTouchedFn();
  }

  onTouched(): void {
    this.onTouchedFn();
  }

  ngOnDestroy(): void {
    // Limpia la suscripción al destruir el componente
    this.selectSubscription?.unsubscribe();
  }

}
