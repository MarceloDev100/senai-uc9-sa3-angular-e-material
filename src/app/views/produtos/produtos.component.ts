import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  cartoes = [
    { titulo: "Cadeira Gamer" , imagem: "assets/img/cadeira.jpg",  nomeProduto: "Cadeira gamer", precoProduto: "R$ 2999,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Drone" , imagem: "assets/img/drone.jpg",  nomeProduto: "Drone", precoProduto: "R$ 3599,00", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Fone de Ouvido" , imagem: "assets/img/fone-ouvido.jfif",  nomeProduto: "Fones de ouvido", precoProduto: "R$ 299,00", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Gabinete" , imagem: "assets/img/gabinete-gamer.png",  nomeProduto: "Gabinete Gamer", precoProduto: "R$ 169,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Memória Ram" , imagem: "assets/img/memoria.jpg",  nomeProduto: "Memoria ram", precoProduto: "R$ 799,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Monitor" , imagem: "assets/img/monitor.jpg",  nomeProduto: "Monitor 23''", precoProduto: "R$ 1299,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Notebook" , imagem: "assets/img/notebook.jpg",  nomeProduto: "Notebook samsung", precoProduto: "R$ 4599,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Processador" , imagem: "assets/img/processador-i7.jpg",  nomeProduto: "Processador i7", precoProduto: "R$ 1499,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Playstation" , imagem: "assets/img/ps5.jpg",  nomeProduto: "Playstation 5", precoProduto: "R$ 329,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Repetidor" , imagem: "assets/img/repetidor.jpg",  nomeProduto: "Repetidor", precoProduto: "R$ 169,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Roteador" , imagem: "assets/img/roteador.jpg",  nomeProduto: "Roteador", precoProduto: "R$ 579,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Smartphone" , imagem: "assets/img/smartphone.jpg",  nomeProduto: "Smartphone Samsung", precoProduto: "R$ 1099,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Smartphone IPhone" , imagem: "assets/img/smartphone-iphone12.jpg",  nomeProduto: "Smartphone Iphone12", precoProduto: "R$ 5499,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Smartwatch" , imagem: "assets/img/smartwatch.jpg",  nomeProduto: "Smartwatch", precoProduto: "R$ 2499,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Tablet" , imagem: "assets/img/tablet.jpg",  nomeProduto: "Tablet", precoProduto: "R$ 2899,99", nomeBotao: "Adicionar ao carrinho" },
    { titulo: "Webcam" , imagem: "assets/img/webcam.jpg",  nomeProduto: "Webcam", precoProduto: "R$ 499,99", nomeBotao: "Adicionar ao carrinho" }
 ]
    
  constructor() { }

  ngOnInit(): void {
  }

}
