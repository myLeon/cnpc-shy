import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomorlComponent } from './nomorl.component';

describe('NomorlComponent', () => {
  let component: NomorlComponent;
  let fixture: ComponentFixture<NomorlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomorlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomorlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
