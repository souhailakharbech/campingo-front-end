import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcampsiteComponent } from './addcampsite.component';

describe('AddcampsiteComponent', () => {
  let component: AddcampsiteComponent;
  let fixture: ComponentFixture<AddcampsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcampsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcampsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
