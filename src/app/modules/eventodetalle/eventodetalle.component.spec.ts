import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventodetalleComponent } from './eventodetalle.component';

describe('EventodetalleComponent', () => {
  let component: EventodetalleComponent;
  let fixture: ComponentFixture<EventodetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventodetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
