import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlgoModalComponent } from './add-algo-modal.component';

describe('AddAlgoModalComponent', () => {
  let component: AddAlgoModalComponent;
  let fixture: ComponentFixture<AddAlgoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAlgoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlgoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
