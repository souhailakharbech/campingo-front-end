import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySuggestComponent } from './activity-suggest.component';

describe('ActivitySuggestComponent', () => {
  let component: ActivitySuggestComponent;
  let fixture: ComponentFixture<ActivitySuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitySuggestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
