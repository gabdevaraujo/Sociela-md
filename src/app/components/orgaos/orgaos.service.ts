import { Orgao } from './../../model/orgao.model';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrgaosService {

constructor(private http: HttpClient) { }

  getOrgaos(): Observable<any> {
    let response = this.http.get('../../../assets/orgaos.json');
    return response;
  }

}
