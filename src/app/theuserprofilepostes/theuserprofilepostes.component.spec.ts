import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheuserprofilepostesComponent } from './theuserprofilepostes.component';

describe('TheuserprofilepostesComponent', () => {
  let component: TheuserprofilepostesComponent;
  let fixture: ComponentFixture<TheuserprofilepostesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheuserprofilepostesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheuserprofilepostesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
