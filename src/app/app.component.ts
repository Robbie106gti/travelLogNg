import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <ng-container primary>
        <router-outlet></router-outlet>
      </ng-container>
    </app-layout>`
})
export class AppComponent {
  title = 'travelLogNg';
}
