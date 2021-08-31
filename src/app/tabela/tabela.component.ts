import { Component, OnInit } from '@angular/core';
import { Prioridade, Tarefa } from '../models/Tarefa';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  tarefas:Tarefa[] = [
    {
      feita: true,
      texto: 'Lavar louça',
      prioridade: Prioridade.Baixa
    },
    {
      feita: false,
      texto: 'Aspirar a casa',
      prioridade: Prioridade.Baixa
    },
    {
      feita: false,
      texto: 'Lavar roupa',
      prioridade: Prioridade.Baixa
    },
    {
      feita: false,
      texto: 'Estudar ',
      prioridade: Prioridade.Baixa
    },
    {
      feita: false,
      texto: 'Fazer o jantar',
      prioridade: Prioridade.Baixa
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
