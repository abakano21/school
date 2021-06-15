import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyclassComponent } from './add-myclass.component';

describe('AddMyclassComponent', () => {
  let component: AddMyclassComponent;
  let fixture: ComponentFixture<AddMyclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMyclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMyclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
