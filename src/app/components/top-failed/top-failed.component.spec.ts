import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFailedComponent } from './top-failed.component';

describe('TopFailedComponent', () => {
  let component: TopFailedComponent;
  let fixture: ComponentFixture<TopFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
