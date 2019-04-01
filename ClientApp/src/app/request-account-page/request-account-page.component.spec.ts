import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAccountPageComponent } from './request-account-page.component';

describe('RequestAccountPageComponent', () => {
  let component: RequestAccountPageComponent;
  let fixture: ComponentFixture<RequestAccountPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAccountPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
