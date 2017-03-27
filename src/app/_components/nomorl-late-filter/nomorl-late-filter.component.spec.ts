import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomorlLateFilterComponent } from './nomorl-late-filter.component';

describe('NomorlLateFilterComponent', () => {
  let component: NomorlLateFilterComponent;
  let fixture: ComponentFixture<NomorlLateFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomorlLateFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomorlLateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
