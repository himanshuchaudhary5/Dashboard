import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPassedComponent } from './top-passed.component';

describe('TopPassedComponent', () => {
  let component: TopPassedComponent;
  let fixture: ComponentFixture<TopPassedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPassedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
