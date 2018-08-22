import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownsComponent } from './drop-downs.component';

describe('DropDownsComponent', () => {
  let component: DropDownsComponent;
  let fixture: ComponentFixture<DropDownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
