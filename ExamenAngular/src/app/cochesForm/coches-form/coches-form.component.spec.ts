import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesFormComponent } from './coches-form.component';

describe('CochesFormComponent', () => {
  let component: CochesFormComponent;
  let fixture: ComponentFixture<CochesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
