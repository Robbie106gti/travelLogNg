import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view404',
  templateUrl: './view404.component.html',
  styleUrls: ['./view404.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class View404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
