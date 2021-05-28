import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsDataComponent } from './measurements-data.component';

describe('MeasurementsDataComponent', () => {
  let component: MeasurementsDataComponent;
  let fixture: ComponentFixture<MeasurementsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
