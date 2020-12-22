import { MatDialog } from '@angular/material/dialog';
import { FormcadastroComponent } from './../formcadastro/formcadastro.component';
import { ModalComponent } from './../modal/modal.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-form-verif-cpf-component',
  templateUrl: './form-verif-cpf-component.component.html',
  styleUrls: ['./form-verif-cpf-component.component.scss']
})
export class FormVerifCpfComponentComponent implements OnInit {

  formulario: FormGroup;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      cpf: new FormControl('', Validators.required)
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormcadastroComponent, { panelClass: 'myapp-no-padding-dialog' });

  }

}
