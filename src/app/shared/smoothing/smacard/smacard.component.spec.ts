import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMACardComponent } from './smacard.component';

describe('SMACardComponent', () => {
  let component: SMACardComponent;
  let fixture: ComponentFixture<SMACardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMACardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMACardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
