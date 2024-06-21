import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloSFComponent } from './desarrollo-sf.component';

describe('DesarrolloSFComponent', () => {
  let component: DesarrolloSFComponent;
  let fixture: ComponentFixture<DesarrolloSFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesarrolloSFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrolloSFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
