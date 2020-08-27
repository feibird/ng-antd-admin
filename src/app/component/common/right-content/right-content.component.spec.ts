import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCOntentComponent } from './right-content.component';

describe('RightCOntentComponent', () => {
  let component: RightCOntentComponent;
  let fixture: ComponentFixture<RightCOntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightCOntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightCOntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
