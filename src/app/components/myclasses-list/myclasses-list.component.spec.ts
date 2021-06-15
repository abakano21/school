import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclassesListComponent } from './myclasses-list.component';

describe('MyclassesListComponent', () => {
  let component: MyclassesListComponent;
  let fixture: ComponentFixture<MyclassesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyclassesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclassesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
