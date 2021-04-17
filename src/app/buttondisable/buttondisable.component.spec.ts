import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtondisableComponent } from './buttondisable.component';

describe('ButtondisableComponent', () => {
  let component: ButtondisableComponent;
  let fixture: ComponentFixture<ButtondisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtondisableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtondisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
