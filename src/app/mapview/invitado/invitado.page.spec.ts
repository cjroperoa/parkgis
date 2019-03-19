import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitadoPage } from './invitado.page';

describe('InvitadoPage', () => {
  let component: InvitadoPage;
  let fixture: ComponentFixture<InvitadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
