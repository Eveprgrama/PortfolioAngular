import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHardskillsComponent } from './edit-hardskills.component';

describe('EditHardskillsComponent', () => {
  let component: EditHardskillsComponent;
  let fixture: ComponentFixture<EditHardskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHardskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHardskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
