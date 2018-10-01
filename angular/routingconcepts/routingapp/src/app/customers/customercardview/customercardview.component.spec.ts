import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercardviewComponent } from './customercardview.component';

describe('CustomercardviewComponent', () => {
  let component: CustomercardviewComponent;
  let fixture: ComponentFixture<CustomercardviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomercardviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
