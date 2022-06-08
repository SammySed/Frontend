import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Leitor } from '../Models/leitor';
import { LeitorService } from '../service/leitor.service';

@Component({
  selector: 'app-leitor',
  templateUrl: './leitor.component.html',
  styleUrls: ['./leitor.component.css']
})
export class LeitorComponent implements OnInit 
{

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private leitorService: LeitorService
   // private leitor
  ) { }

  //Criar objeto do tipo leitor
  model: Leitor = new Leitor();

  //Criar um id para controlar o post ou o put
  id!: number;

  voltarParalista()
  {
    this.router.navigate(['/leitor']);
  }

  

  submit(): void {


    if (this.id > 0) {

      this.leitorService.Editar(this.id,this.model).subscribe({
        error: (e) => { console.log(e) },
        next: (dados) => {
          alert('Leitor alterado com sucesso!!!!!');
          this.voltarParalista();
         },
        });

    } else {
      this.leitorService.Adicionar(this.model).subscribe({
        error: (e) => { console.log(e) },
        next: (dados) => {
          alert('Leitor cadastrado com sucesso!!!!!');
          this.voltarParalista();
         },
        });
    }
  }

  ngOnInit(): void 
  {

   /*this.id = this.route.snapshot.params['id'];

   if(this.id)
   {
     this.obterPorId(this.id);
   }*/
  }

}
 