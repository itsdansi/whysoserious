import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent2 } from './parent.component';

describe('ParentComponent2', () => {
  let component: ParentComponent2;
  let fixture: ComponentFixture<ParentComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
