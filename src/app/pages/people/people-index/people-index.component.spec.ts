import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleIndexComponent } from './people-index.component';

describe('PeopleIndexComponent', () => {
  let component: PeopleIndexComponent;
  let fixture: ComponentFixture<PeopleIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
