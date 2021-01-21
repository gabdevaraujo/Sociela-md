import { Orgao } from './../../model/orgao.model';
import { OrgaosService } from './orgaos.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orgaos',
  templateUrl: './orgaos.component.html',
  styleUrls: ['./orgaos.component.scss']
})
export class OrgaosComponent implements OnInit {

  orgaos: Orgao[];

  @Input() titulo: string;

  constructor(private orgaoService : OrgaosService) { }

  ngOnInit() {
    this.populaOrgaos();
  }

  populaOrgaos() {
    this.orgaoService.getOrgaos()
      .subscribe(dados => {
        this.orgaos = dados;
        console.log(dados);

      });
  }

}
