import { Component, OnInit } from '@angular/core';

import { Prioridade, Tarefa } from '../models/Tarefa';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tarefas:Tarefa[]

  private tservice: TarefasService = new TarefasService();
  
  constructor() { 
    this.tarefas = this.tservice.getTarefas();
  }

  ngOnInit(): void {
  }

  addTarefa(t:string){
    
    let tarefaNova:Tarefa ={
      feita: false,
      texto: t,
      prioridade: Prioridade.Baixa
    }
    
    this.tarefas.push(tarefaNova)

  }


}
