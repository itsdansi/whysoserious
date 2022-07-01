import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Texsec1Component } from './texsec1.component';

describe('Texsec1Component', () => {
  let component: Texsec1Component;
  let fixture: ComponentFixture<Texsec1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Texsec1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Texsec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
