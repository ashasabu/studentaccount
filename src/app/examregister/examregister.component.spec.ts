import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamregisterComponent } from './examregister.component';

describe('ExamregisterComponent', () => {
  let component: ExamregisterComponent;
  let fixture: ComponentFixture<ExamregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
