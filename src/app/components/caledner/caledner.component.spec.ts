import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalednerComponent } from './caledner.component';

describe('CalednerComponent', () => {
  let component: CalednerComponent;
  let fixture: ComponentFixture<CalednerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalednerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalednerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
