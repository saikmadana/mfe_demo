import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotecComponent } from './remotec.component';

describe('RemotecComponent', () => {
  let component: RemotecComponent;
  let fixture: ComponentFixture<RemotecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemotecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemotecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
