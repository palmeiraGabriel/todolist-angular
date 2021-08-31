import { Injectable } from '@angular/core';
import { Tarefa,Prioridade } from '../models/Tarefa';

const TAREFAS:Tarefa[] =[
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

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor() { }

  getTarefas():Tarefa[]{
    return TAREFAS;
  }

  addTarefa(t:Tarefa):void{
    TAREFAS.push(t);
  }

  // removeTarefa(t:Tarefa):void{
  //   TAREFAS.splice(TAREFAS.indexOf(t),1)
  // }

}
