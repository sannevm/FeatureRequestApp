import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeatureRequestModalComponent } from './new-feature-request-modal.component';

describe('NewFeatureRequestModalComponent', () => {
  let component: NewFeatureRequestModalComponent;
  let fixture: ComponentFixture<NewFeatureRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFeatureRequestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFeatureRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
