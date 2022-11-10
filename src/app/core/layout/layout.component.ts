import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { takeUntil } from 'rxjs';
import { Unsubscriber } from '@shared/unsubscriber/unsubscriber';
import { LoadingModes, LoadingService } from '../data/loading.service';
import { Snack, SnackbarService } from '../data/snackbar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends Unsubscriber implements OnInit  {

  constructor(public loadingService: LoadingService, private _snackBar: MatSnackBar, private snackbarService: SnackbarService) {
    super()
   }

  ngOnInit(): void {
    this.refresh();
    this.snackbarService.snack$().pipe(takeUntil(this._destroyed$)).subscribe(snack => this.openSnackBar(snack))
  }

  openSnackBar(snack: Snack | null): void {
    if(!snack) return;
    const config: any = {
      horizontalPosition: snack.hor,
      verticalPosition: snack.ver,
      duration: snack.duration
    };
    this._snackBar.open(snack.msg, snack.btn, config);
  }

  refresh(): void {
    this.loadingService.setLoading(LoadingModes.query);
    setTimeout(() => this.loadingService.setLoading(), 5000);
  }
  
  disableNotificationsToggle(): void {
    this.snackbarService.toggleDisabled();
    this.loadingService.toggleDisabled();

  }

}
