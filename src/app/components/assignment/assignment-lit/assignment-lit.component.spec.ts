import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentLitComponent } from './assignment-lit.component';

describe('AssignmentLitComponent', () => {
  let component: AssignmentLitComponent;
  let fixture: ComponentFixture<AssignmentLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentLitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignmentLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
