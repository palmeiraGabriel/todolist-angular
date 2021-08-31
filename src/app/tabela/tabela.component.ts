import { Component, OnInit } from '@angular/core';
import { Prioridade, Tarefa } from '../models/Tarefa';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  tarefas:Tarefa[]
  
  private tservice: TarefasService = new TarefasService();

  constructor() { 
    this.tarefas = this.tservice.getTarefas();
  }

  ngOnInit(): void {
  }

  removeTarefa(t:Tarefa){
    this.tarefas.splice(this.tarefas.indexOf(t),1)

  }

}
