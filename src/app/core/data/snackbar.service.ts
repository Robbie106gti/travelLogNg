import { Injectable } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

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
  private snacks = new BehaviorSubject<Snack | null>(null);
  public snack$ = () => this.snacks.asObservable();

  constructor() { 
    this.snacks.subscribe(console.log)
  }

  setSnack(snack: Snack) {
    const newSnack: Snack = {
      msg: snack.msg,
      btn: snack?.btn ?? 'Remove',
      hor: snack?.hor ?? 'start',
      ver: snack?.ver ?? 'bottom',
      duration: snack.duration
    };
    this.snacks.next(snack);
  }
}
