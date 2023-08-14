import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServicoComponent } from './new-servico.component';

describe('NewServicoComponent', () => {
  let component: NewServicoComponent;
  let fixture: ComponentFixture<NewServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewServicoComponent]
    });
    fixture = TestBed.createComponent(NewServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
