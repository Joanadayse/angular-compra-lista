import { Component } from '@angular/core';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrl: './mercadorias.component.css'
})
export class MercadoriasComponent {

  title="Lista de Compras";
mercadorias=[{
  id:1,
    descricao:"arroz",
    quantidadeEstoque:1,
    quantidadeMinima:2
  },
{id:2,
  descricao:"feijao",
  quantidadeEstoque:5,
  quantidadeMinima:3
},
{
  id:3,
  descricao:"oleo",
  quantidadeEstoque:2,
  quantidadeMinima:2
}]

novaMercadoria={
  id:4,
  descricao:"sal",
  quantidadeEstoque:2,
  quantidadeMinima:1
}

adicionarMercadoria(){
  this.mercadorias.push({
    id:this.novaMercadoria.id,
    descricao:this.novaMercadoria.descricao,
    quantidadeEstoque:this.novaMercadoria.quantidadeEstoque,
    quantidadeMinima:this.novaMercadoria.quantidadeMinima
  })

}
constructor(){}


}
