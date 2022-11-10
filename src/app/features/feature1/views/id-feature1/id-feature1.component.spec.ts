import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdFeature1Component } from './id-feature1.component';

describe('IdFeature1Component', () => {
  let component: IdFeature1Component;
  let fixture: ComponentFixture<IdFeature1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdFeature1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdFeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
