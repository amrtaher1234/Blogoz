import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmachineComponent } from './uploadmachine.component';

describe('UploadmachineComponent', () => {
  let component: UploadmachineComponent;
  let fixture: ComponentFixture<UploadmachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadmachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
