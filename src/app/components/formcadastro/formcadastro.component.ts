import { CadastroService } from './cadastro.service';
import { FinalComponent } from './../final/final.component';
import { TermoComponent } from './../termo/termo.component';
import { MatDialog } from '@angular/material/dialog';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicos } from 'src/app/model/servicos.model';

@Component({
  selector: 'app-formcadastro',
  templateUrl: './formcadastro.component.html',
  styleUrls: ['./formcadastro.component.scss']
})
export class FormcadastroComponent implements OnInit {

  modalRef: MDBModalRef;
  formulario: FormGroup;
  servicos: Servicos[];

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cadastroService: CadastroService
  ) { }

  ngOnInit(): void {


    this.getServicos();

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
      cep: [null],
      endereco: [null],
      bairro: [null],
      cidade: [null],
      estado: [null],
      telefone: [null],
      celular: [null],
      prefeitura: [null],
      aceiteTermoConsent: [null],
      aceiteTermoPrivacidade: [null],
      servicos: [null]

    });
  }

  onSubmit() {
    console.log(this.formulario);

  }

  openDialog() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(FinalComponent, { panelClass: 'myapp-no-padding-dialog' });
  }

  openDialogTermos() {
    const dialogRef = this.dialog.open(TermoComponent, { panelClass: 'myapp-no-padding-dialog' });
  }

  consultaCEP(): any {

    let cep = this.formulario.get('cep').value;

    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe(dados => this.populaDadosForm(dados));
      }
    }
  }

  populaDadosForm(dados) {

    this.formulario.patchValue({

        //cep: dados.cep,
        endereco: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
        prefeitura: dados.localidade
    });
  }

  getServicos() {
    this.cadastroService.getServicos()
      .subscribe(dados => {
        this.servicos = dados;
        console.log(this.servicos);
      });
  }

}
