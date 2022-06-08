import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Leitor } from "../Models/leitor";

@Injectable({
    providedIn: 'root',
})

export class LeitorService{

 api: string = environment.api;

 constructor(private http: HttpClient) {}

 public Obtertodos(): Observable<Leitor[]> 
 {
     return this.http.get<Leitor[]>(this.api + 'leitores');
 }

 public ObterPorId(id: number): Observable<Leitor[]> 
 {
   return this.http.get<Leitor[]>(this.api + 'leitores' + id);
 }

 public Adicionar(leitor:Leitor): Observable<number> {
    return this.http.post<number>(this.api + 'leitores', leitor);
 }

 public Editar(id: Number, leitor:Leitor): Observable<number> 
 {
    return this.http.put<number>(this.api + 'leitores' + id, leitor);
 }

 public Deletar(id:number): Observable<number>{
    return this.http.delete<number>(this.api + 'leitores' + id);
 }

}