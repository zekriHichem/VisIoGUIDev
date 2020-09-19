import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DftcardComponent } from './dftcard.component';

describe('DftcardComponent', () => {
  let component: DftcardComponent;
  let fixture: ComponentFixture<DftcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DftcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
