import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlIncendiosComponent } from './control-incendios.component';

describe('ControlIncendiosComponent', () => {
  let component: ControlIncendiosComponent;
  let fixture: ComponentFixture<ControlIncendiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlIncendiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlIncendiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
