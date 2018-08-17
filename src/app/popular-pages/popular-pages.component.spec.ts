import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPagesComponent } from './popular-pages.component';

describe('PopularPagesComponent', () => {
  let component: PopularPagesComponent;
  let fixture: ComponentFixture<PopularPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
