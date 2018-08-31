import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCustomComponent } from './child-custom.component';

describe('ChildCustomComponent', () => {
  let component: ChildCustomComponent;
  let fixture: ComponentFixture<ChildCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
