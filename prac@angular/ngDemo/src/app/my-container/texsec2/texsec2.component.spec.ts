import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Texsec2Component } from './texsec2.component';

describe('Texsec2Component', () => {
  let component: Texsec2Component;
  let fixture: ComponentFixture<Texsec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Texsec2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Texsec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
