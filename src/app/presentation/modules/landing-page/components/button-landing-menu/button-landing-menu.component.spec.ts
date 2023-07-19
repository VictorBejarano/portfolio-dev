import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLandingMenuComponent } from './button-landing-menu.component';

describe('ButtonLandingMenuComponent', () => {
  let component: ButtonLandingMenuComponent;
  let fixture: ComponentFixture<ButtonLandingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLandingMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLandingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
