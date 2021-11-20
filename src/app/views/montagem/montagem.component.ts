import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-montagem',
  templateUrl: './montagem.component.html',
  styleUrls: ['./montagem.component.css']
})
export class MontagemComponent implements OnInit {


  pecas: string[]  = ["Placa de vídeo", "Memória ram", "Processador", "Fonte", "Gabinete", "Placa-mãe",
  "Cooler(opcional)", "Disco rígido", "Mouse(opcional)", "Mouse pad(opcional)", "Teclado(opcional)", "Fones(opcional)", ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
