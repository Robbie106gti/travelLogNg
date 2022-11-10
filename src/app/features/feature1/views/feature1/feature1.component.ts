import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '@core/data/snackbar.service';
import { Unsubscriber } from '@shared/unsubscriber/unsubscriber';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component extends Unsubscriber implements OnInit {

  constructor(private snackbarService: SnackbarService) {
    super()
   }

  ngOnInit(): void {
    this.snackbarService.snack$().pipe(takeUntil(this._destroyed$)).subscribe(snacks => console.log(snacks))

  }

}
