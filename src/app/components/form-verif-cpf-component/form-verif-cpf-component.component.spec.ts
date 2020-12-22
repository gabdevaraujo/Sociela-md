import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVerifCpfComponentComponent } from './form-verif-cpf-component.component';

describe('FormVerifCpfComponentComponent', () => {
  let component: FormVerifCpfComponentComponent;
  let fixture: ComponentFixture<FormVerifCpfComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVerifCpfComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVerifCpfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
