import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeature1Component } from './new-feature1.component';

describe('NewFeature1Component', () => {
  let component: NewFeature1Component;
  let fixture: ComponentFixture<NewFeature1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFeature1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
