import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotemComponent } from './remotem.component';

describe('RemotemComponent', () => {
  let component: RemotemComponent;
  let fixture: ComponentFixture<RemotemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemotemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemotemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
