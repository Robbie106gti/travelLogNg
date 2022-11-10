import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-feature1',
  templateUrl: './new-feature1.component.html',
  styleUrls: ['./new-feature1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewFeature1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
