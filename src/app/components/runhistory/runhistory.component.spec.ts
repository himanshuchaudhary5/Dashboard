import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunhistoryComponent } from './runhistory.component';

describe('RunhistoryComponent', () => {
  let component: RunhistoryComponent;
  let fixture: ComponentFixture<RunhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
