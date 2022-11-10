import { AfterViewInit, ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Unsubscriber } from '@shared/unsubscriber/unsubscriber';
import { BehaviorSubject, takeUntil } from 'rxjs';
import { Cities } from './dropdown-searchable';

@Component({
  selector: 'app-dropdown-seachable',
  templateUrl: './dropdown-seachable.component.html',
  styleUrls: ['./dropdown-seachable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownSeachableComponent),
      multi:true
    }
  ]
})
export class DropdownSeachableComponent extends Unsubscriber implements OnInit, AfterViewInit, ControlValueAccessor   {
  formControl: FormControl = new FormControl('');

  @Input() type?: boolean = false;
  searchValue = '';
  cities = Cities;
  cities$ = new BehaviorSubject(Cities);

  onChange = (_: any) => {};

  onTouched = () => {};

  constructor() { 
    super();
    this.formControl.valueChanges.pipe(takeUntil(this._destroyed$)).subscribe(value => this.type === false ? this.onChange(value[0]) : this.onChange(value)
    );
  }

  ngOnInit(): void {  }

  ngAfterViewInit(): void {
   // console.log(this.value.getRawValue());
  }

  writeValue(value: string): void {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  updateOptions(value: string): void {
    const searchResults = Cities.filter(v => v.toLowerCase().includes(value.toLocaleLowerCase()));
    this.cities$.next(searchResults);
  }

}

/* 
Custom Select dropdown form element 
Single or multipleSearchable
Should be able to use within a larger FormGroup as FormControl
No backend API */