import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapscomponentComponent } from './mapscomponent.component';

describe('MapscomponentComponent', () => {
  let component: MapscomponentComponent;
  let fixture: ComponentFixture<MapscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
