import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id-feature1',
  templateUrl: './id-feature1.component.html',
  styleUrls: ['./id-feature1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdFeature1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
