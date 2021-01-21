import { Banco } from './banco.model';
import { Estado } from './estado.model';
import { Orgao } from './orgao.model';

export interface Usuario {

  id?: number;
  matricula: string;
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  nascimento: Date;
  nomePai: string;
  nomeMae: string;
  sexo: string;

  endereco: string;
  bairro: string;
  cidade: string;
  estado: Estado;

  telefone1: string;
  telefone2: string;

  orgao: Orgao;

  autorizoDescontoFolha: boolean;
  autorizoDebitoConta: boolean;
  banco: Banco;
  autorizoBoletoBancario: boolean;
  dataBoleto: Date;

  aceiteConcentimento: boolean;
  aceiteDados: boolean;

  dependente1: string;
  dependente2: string;

  acessoOk: boolean;
}
