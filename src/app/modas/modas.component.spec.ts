import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModasComponent } from './modas.component';

describe('ModasComponent', () => {
  let component: ModasComponent;
  let fixture: ComponentFixture<ModasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
