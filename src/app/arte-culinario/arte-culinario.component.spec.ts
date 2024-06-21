import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArteCulinarioComponent } from './arte-culinario.component';

describe('ArteCulinarioComponent', () => {
  let component: ArteCulinarioComponent;
  let fixture: ComponentFixture<ArteCulinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArteCulinarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArteCulinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
