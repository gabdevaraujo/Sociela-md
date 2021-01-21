import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orgao } from 'src/app/model/orgao.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  getServicos(): Observable<any> {
    return this.http.get("../../../assets/servicos.json");
  }

  getOrgaos(): Observable<any>{
    return this.http.get("../../../assets/orgaos.json");
  }

}
