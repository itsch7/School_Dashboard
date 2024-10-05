import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTeachersScheduleComponent } from './add-edit-teachers-schedule.component';

describe('AddEditTeachersScheduleComponent', () => {
  let component: AddEditTeachersScheduleComponent;
  let fixture: ComponentFixture<AddEditTeachersScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditTeachersScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditTeachersScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
