import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListBycampComponent } from './activity-list-bycamp.component';

describe('ActivityListBycampComponent', () => {
  let component: ActivityListBycampComponent;
  let fixture: ComponentFixture<ActivityListBycampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityListBycampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListBycampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
