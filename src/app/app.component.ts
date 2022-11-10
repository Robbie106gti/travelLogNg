import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <ng-container primary>
        <router-outlet></router-outlet>
      </ng-container>
    </app-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'travelLogNg';

  // https://material.angular.io/components/
}
