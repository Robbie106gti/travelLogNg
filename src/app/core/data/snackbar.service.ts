import { Injectable } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { distinctUntilChanged } from 'rxjs';
import { BehaviorSubject, combineLatestWith, map } from 'rxjs';

export type Snack = {
  msg: string;
  btn?: string;
  hor?: MatSnackBarHorizontalPosition;
  ver?: MatSnackBarVerticalPosition ;
  duration?: number;
};

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private disabled$ = new BehaviorSubject(false);
  private snacks = new BehaviorSubject<Snack | null>(null);
  public snack$ = () => this.snacks.pipe(
    combineLatestWith(this.disabled$),
    map(([snacks, disabled]) => {
      if (disabled) return null;
      return snacks;
    })
    );

  constructor() { 
    // this.snacks.subscribe(console.log)
  }

  setSnack(snack: Snack) {
    const newSnack: Snack = {
      msg: snack.msg,
      btn: snack.btn ?? 'Close',
      hor: snack.hor ?? 'end',
      ver: snack.ver ?? 'top',
      duration: snack.duration ?? 5000
    };
    this.snacks.next(newSnack);
  }

  toggleDisabled(): void {
    if (!this.disabled$.getValue()) {
      this.setSnack({msg: 'Notifications are disabled'});
    }
    this.disabled$.next(!this.disabled$.getValue());
  }
}
