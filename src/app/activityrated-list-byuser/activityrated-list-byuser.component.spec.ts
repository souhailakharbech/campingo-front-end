import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityratedListByuserComponent } from './activityrated-list-byuser.component';

describe('ActivityratedListByuserComponent', () => {
  let component: ActivityratedListByuserComponent;
  let fixture: ComponentFixture<ActivityratedListByuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityratedListByuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityratedListByuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
