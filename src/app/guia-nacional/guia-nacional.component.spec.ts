import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaNacionalComponent } from './guia-nacional.component';

describe('GuiaNacionalComponent', () => {
  let component: GuiaNacionalComponent;
  let fixture: ComponentFixture<GuiaNacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiaNacionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiaNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
