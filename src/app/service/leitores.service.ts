import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Leitor } from "../Models/leitor";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
  
  export class LeitoresService 
  {
    api: string = environment.api;
  
    constructor(private http: HttpClient) {}
  
    public ObterTodos(): Observable<Leitor[]> {
      return this.http.get<Leitor[]>(this.api + 'leitores');
    }
  
    public ObterPorId(id: number): Observable<Leitor> {
      return this.http.get<Leitor>(this.api + 'leitores/' + id);
    }

    public Adicionar(leitor: Leitor): Observable<number> {
      return this.http.post<number>(this.api + 'leitores', leitor);
    }
  
    public Editar(id: number, leitor: Leitor): Observable<number> {
      return this.http.put<number>(this.api + 'leitores/' + id, leitor);
    }
  
    public Deletar(id: Number) {
      return this.http.delete(this.api + 'leitores/' + id);
    }
  }