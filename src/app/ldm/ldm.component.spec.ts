import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmComponent } from './ldm.component';

describe('LdmComponent', () => {
  let component: LdmComponent;
  let fixture: ComponentFixture<LdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
