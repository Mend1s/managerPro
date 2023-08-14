import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteServiceComponent } from './dialog-delete-service.component';

describe('DialogDeleteServiceComponent', () => {
  let component: DialogDeleteServiceComponent;
  let fixture: ComponentFixture<DialogDeleteServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDeleteServiceComponent]
    });
    fixture = TestBed.createComponent(DialogDeleteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
