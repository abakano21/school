import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclassDetailsComponent } from './myclass-details.component';

describe('MyclassDetailsComponent', () => {
  let component: MyclassDetailsComponent;
  let fixture: ComponentFixture<MyclassDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyclassDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
