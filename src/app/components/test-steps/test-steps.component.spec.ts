import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStepsComponent } from './test-steps.component';

describe('TestStepsComponent', () => {
  let component: TestStepsComponent;
  let fixture: ComponentFixture<TestStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
