import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Principal1Component } from './principal1.component';

describe('Principal1Component', () => {
  let component: Principal1Component;
  let fixture: ComponentFixture<Principal1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Principal1Component]
    });
    fixture = TestBed.createComponent(Principal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
