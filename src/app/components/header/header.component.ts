import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { FormVerifCpfComponentComponent } from './../form-verif-cpf-component/form-verif-cpf-component.component';
import { FooterComponent } from './../footer/footer.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(FormVerifCpfComponentComponent, { panelClass: 'myapp-no-padding-dialog' });
  }

}
