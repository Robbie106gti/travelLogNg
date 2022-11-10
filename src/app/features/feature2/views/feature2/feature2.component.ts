import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Feature2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
