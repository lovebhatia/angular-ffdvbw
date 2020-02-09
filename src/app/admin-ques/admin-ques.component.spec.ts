import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuesComponent } from './admin-ques.component';

describe('AdminQuesComponent', () => {
  let component: AdminQuesComponent;
  let fixture: ComponentFixture<AdminQuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
