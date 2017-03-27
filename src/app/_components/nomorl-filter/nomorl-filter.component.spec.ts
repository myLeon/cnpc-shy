import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomorlFilterComponent } from './nomorl-filter.component';

describe('NomorlFilterComponent', () => {
  let component: NomorlFilterComponent;
  let fixture: ComponentFixture<NomorlFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomorlFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomorlFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
