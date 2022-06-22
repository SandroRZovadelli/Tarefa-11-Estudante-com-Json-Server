import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Estudante } from './estudante';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  baseUrl = 'http://localhost:3000';
  estudanteUrl = this.baseUrl + '/estudantes';
  professorUrl = this.baseUrl + '/professores';

  constructor(private httpClient: HttpClient) { }

  getEstudantes(): Observable<Estudante[]> {
    return this.httpClient.get<Estudante[]>(this.estudanteUrl);
  }

  getProfessores(): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>(this.professorUrl);
  }
  
}
