import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmacardComponent } from './wmacard.component';

describe('WmacardComponent', () => {
  let component: WmacardComponent;
  let fixture: ComponentFixture<WmacardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmacardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
