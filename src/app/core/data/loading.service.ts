import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatestWith, map } from 'rxjs';
import { SnackbarService } from './snackbar.service';

export type loading = {
  mode: LoadingModes,
  value?: number,
  bufferValue?: number
};

export enum LoadingModes { determinate = "determinate", indeterminate = "indeterminate", buffer = "buffer", query = "query" };

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private disabled$ = new BehaviorSubject(true);
  private loading = new BehaviorSubject<loading | null>(null);

  public loading$ = () => this.loading.pipe(
    combineLatestWith(this.disabled$),
    map(([loading, disabled]) => {
      if (disabled) return null;
      return loading;
    })
  );

  constructor(private snackbarService: SnackbarService) {
    // this.loading.subscribe(console.log)
  }

  setLoading(mode?: LoadingModes) {
    this.loading.next(mode ? {
      mode
    } : null);
    if (!mode) {
      this.snackbarService.setSnack({
        msg: 'Loading has finished!!!',
        btn: 'Close'
      });
    }
  }

  toggleDisabled(): void {
    if (!this.disabled$.getValue()) {
      this.snackbarService.setSnack({
        msg: 'Loading bar disabled!',
        btn: 'Close'
      });
    }
    this.disabled$.next(!this.disabled$.getValue());
  }
}
