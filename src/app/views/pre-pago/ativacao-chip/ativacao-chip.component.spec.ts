import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivacaoChipComponent } from './ativacao-chip.component';

describe('AtivacaoChipComponent', () => {
  let component: AtivacaoChipComponent;
  let fixture: ComponentFixture<AtivacaoChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtivacaoChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtivacaoChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
