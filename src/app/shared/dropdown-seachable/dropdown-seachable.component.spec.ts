import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSeachableComponent } from './dropdown-seachable.component';

describe('DropdownSeachableComponent', () => {
  let component: DropdownSeachableComponent;
  let fixture: ComponentFixture<DropdownSeachableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownSeachableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownSeachableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
