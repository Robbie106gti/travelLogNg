import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  private loading = new BehaviorSubject<loading | null>(null);
  public loading$ = () => this.loading.asObservable();

  constructor(private snackbarService: SnackbarService) { 
    this.loading.subscribe(console.log)
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
}
