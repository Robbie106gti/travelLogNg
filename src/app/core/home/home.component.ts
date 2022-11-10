import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


export interface FormGroupUser {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  city: FormControl<string>;
  provice: FormControl<string>;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  fg = new FormGroup({
    firstName: new FormControl('', []),
    lastName: new FormControl('', []),
    city: new FormControl('', []),
    provice: new FormControl('', []),
  });

  constructor() { }

  ngOnInit(): void {
    this.fg.valueChanges.subscribe(value => console.log(value));
  }

}
