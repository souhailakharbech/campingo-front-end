import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityfavListByuserComponent } from './activityfav-list-byuser.component';

describe('ActivityfavListByuserComponent', () => {
  let component: ActivityfavListByuserComponent;
  let fixture: ComponentFixture<ActivityfavListByuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityfavListByuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityfavListByuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
