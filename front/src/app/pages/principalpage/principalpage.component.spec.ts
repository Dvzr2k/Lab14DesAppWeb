import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalpageComponent } from './principalpage.component';

describe('PrincipalpageComponent', () => {
  let component: PrincipalpageComponent;
  let fixture: ComponentFixture<PrincipalpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalpageComponent]
    });
    fixture = TestBed.createComponent(PrincipalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
