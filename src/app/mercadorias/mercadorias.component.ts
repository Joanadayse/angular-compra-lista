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
    quantidade:1
  },
{id:2,
  descricao:"feijao",
  quantidade:5
},
{
  id:3,
  descricao:"oleo",
  quantidade:2
}]


}
