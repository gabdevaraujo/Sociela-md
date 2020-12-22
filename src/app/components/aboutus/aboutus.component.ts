import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  @Input() titulo: string;
  @Input() mensagem: string;
  @Input() cnpj: string;

  constructor() { }

  ngOnInit(): void {
  }

}
