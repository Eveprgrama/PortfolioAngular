import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSobremiComponent } from './edit-sobremi.component';

describe('EditSobremiComponent', () => {
  let component: EditSobremiComponent;
  let fixture: ComponentFixture<EditSobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
