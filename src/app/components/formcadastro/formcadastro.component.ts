import { FinalComponent } from './../final/final.component';
import { TermoComponent } from './../termo/termo.component';
import { MatDialog } from '@angular/material/dialog';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formcadastro',
  templateUrl: './formcadastro.component.html',
  styleUrls: ['./formcadastro.component.scss']
})
export class FormcadastroComponent implements OnInit {

  modalRef: MDBModalRef;
  formulario: FormGroup;

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      cep: new FormControl(''),
      endereco: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl(''),
      telefone: new FormControl(''),
      celular: new FormControl(''),
      prefeitura: new FormControl(''),
      aceiteTermoConsent: new FormControl(''),
      aceiteTermoPrivacidade: new FormControl('')

    });
  }

  onSubmit(): void {

  }

  openDialog() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(FinalComponent, { panelClass: 'myapp-no-padding-dialog' });
  }

  openDialogTermos() {
    const dialogRef = this.dialog.open(TermoComponent, { panelClass: 'myapp-no-padding-dialog' });
  }

  consultaCEP() {

  }
}
