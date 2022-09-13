import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSoftComponent } from './edit-soft.component';

describe('EditSoftComponent', () => {
  let component: EditSoftComponent;
  let fixture: ComponentFixture<EditSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
