import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheuserprofileComponent } from './theuserprofile.component';

describe('TheuserprofileComponent', () => {
  let component: TheuserprofileComponent;
  let fixture: ComponentFixture<TheuserprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheuserprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheuserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
