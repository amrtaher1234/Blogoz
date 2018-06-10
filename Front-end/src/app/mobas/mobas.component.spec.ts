import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobasComponent } from './mobas.component';

describe('MobasComponent', () => {
  let component: MobasComponent;
  let fixture: ComponentFixture<MobasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
