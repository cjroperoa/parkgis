import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestViewPage } from './guest-view.page';

describe('GuestViewPage', () => {
  let component: GuestViewPage;
  let fixture: ComponentFixture<GuestViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
