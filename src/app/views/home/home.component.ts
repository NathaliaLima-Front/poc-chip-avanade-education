import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  opcoes: any = [];
  constructor() { }

  ngOnInit(): void {
    this.opcoes = [
      {
        id: 1,
        titulo: "Adquirir nova linha",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        urlLink: "/page-example"
      },
      {
        id: 2,
        titulo: "Ativar seu chip Pré-Pago",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        urlLink: "/ativacao-chip-pre-pago"
      },
      {
        id: 3,
        titulo: "Ver planos disponíveis",
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        urlLink: "/page-example"
      }
    ]
  }

}
