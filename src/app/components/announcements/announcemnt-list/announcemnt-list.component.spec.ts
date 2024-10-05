import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncemntListComponent } from './announcemnt-list.component';

describe('AnnouncemntListComponent', () => {
  let component: AnnouncemntListComponent;
  let fixture: ComponentFixture<AnnouncemntListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncemntListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnouncemntListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
