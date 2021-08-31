import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../models/Tarefa';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() tarefa!:Tarefa;
  @Output() onRemoverTarefa:EventEmitter<null> = new EventEmitter();

  constructor() { }

  fecharRow(){
    this.onRemoverTarefa.emit()
    console.log('teste');
    
  }

  ngOnInit(): void {
  }

}
