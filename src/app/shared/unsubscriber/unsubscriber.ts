import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  template: ``
})
export class Unsubscriber implements OnDestroy {
  _destroyed$ = new ReplaySubject();

  ngOnDestroy() {
    console.info('destroy subscription');
    this._destroyed$.next(undefined);
    this._destroyed$.complete();
  }
}
