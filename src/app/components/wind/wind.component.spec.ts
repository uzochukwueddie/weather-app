import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindComponent } from './wind.component';

describe('WindComponent', () => {
  let component: WindComponent;
  let fixture: ComponentFixture<WindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
