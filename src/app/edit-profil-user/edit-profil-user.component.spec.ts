import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilUserComponent } from './edit-profil-user.component';

describe('EditProfilUserComponent', () => {
  let component: EditProfilUserComponent;
  let fixture: ComponentFixture<EditProfilUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfilUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
