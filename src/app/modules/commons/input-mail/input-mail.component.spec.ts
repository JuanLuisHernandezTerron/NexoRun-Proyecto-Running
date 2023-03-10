import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMailComponent } from './input-mail.component';

describe('InputMailComponent', () => {
  let component: InputMailComponent;
  let fixture: ComponentFixture<InputMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
