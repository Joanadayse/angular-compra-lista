import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrl: './mercadorias.component.css'
})
export class MercadoriasComponent implements OnInit{

  title="Lista de Compras";
//   mercadoria:Mercadoria[]


// novaMercadoria={
//   id:4,
//   descricao:"sal",
//   quantidadeEstoque:2,
//   quantidadeMinima:1
// }

// salvarMercadoria(){
//   this.mercadoria.push({
//     id:this.novaMercadoria.id,
//     descricao:this.novaMercadoria.descricao,
//     quantidadeEstoque:this.novaMercadoria.quantidadeEstoque,
//     quantidadeMinima:this.novaMercadoria.quantidadeMinima
//   })

// }
// constructor(private mercadoriaService: MercadoriaService) {}

// ngOnInit(){
//   this.getMercadorias();
// }

// getMercadorias():void{
//   this.mercadoria= this.mercadoriaService.getMercadorias();
// }

ngOnInit(){
 
}


}
