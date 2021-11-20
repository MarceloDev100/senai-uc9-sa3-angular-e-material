import { Component, OnInit } from '@angular/core';
import { CartaoHome } from 'src/app/models/cartao-home';
import { FaleConosco } from 'src/app/models/fale-conosco';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cartoes = [
     { titulo: "Notebook Samsung" , imagem: "assets/img/notebook.jpg",  nomeProduto: " Notebook Samsung Book i7", precoProduto: "R$ 6.699,00", nomeBotao: "Adicionar ao carrinho" },
     { titulo: "Playstation 5" , imagem: "assets/img/ps5.jpg",  nomeProduto: "Video Game Playstation 5 Ps5 825gb Sony", precoProduto: "R$ 4.999,00", nomeBotao: "Adicionar ao carrinho" },
     { titulo: "FIFA 2022" , imagem: "assets/img/fifa2022.jpg",  nomeProduto: " FIFA 22 para PS5 Electronic Arts Inc", precoProduto: "R$ 499,00", nomeBotao: "Adicionar ao carrinho" },
     { titulo: "Mouse gamer" , imagem: "assets/img/mousegamer.jpg",  nomeProduto: "Mouse Gamer Husky Gaming Frost, Preto.", precoProduto: "R$ 169,99", nomeBotao: "Adicionar ao carrinho" },
  ]
     

  ngOnInit(): void {
  }

  faleConosco = new FaleConosco("", "", "");

  onSubmit(){
      console.log(this.faleConosco)
  }

}
