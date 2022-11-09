import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { LoadingModes, LoadingService } from '../data/loading.service';
import { Snack, SnackbarService } from '../data/snackbar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  subscibtions: Subscription[] = [];
  constructor(public loadingService: LoadingService, private _snackBar: MatSnackBar, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.refresh();
    this.subscibtions.push(this.snackbarService.snack$().subscribe(snack => this.openSnackBar(snack)));
  }
  
  ngOnDestroy() {
    this.subscibtions.forEach(i => i.unsubscribe());
  }

  openSnackBar(snack: Snack | null) {
    if(!snack) return;
    const config: any = {
      horizontalPosition: snack.hor,
      verticalPosition: snack.ver,
      duration: snack.duration ? snack.duration * 1000 : 5000
    };
    this._snackBar.open(snack.msg, snack.btn, config);
  }

  refresh() {
    this.loadingService.setLoading(LoadingModes.query);
    setTimeout(() => this.loadingService.setLoading(), 5000);
  }

}
