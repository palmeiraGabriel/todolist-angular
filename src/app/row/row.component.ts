import { Component, OnInit, Input } from '@angular/core';
import { Tarefa } from '../models/Tarefa';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() tarefa!:Tarefa;

  constructor() { }

  ngOnInit(): void {
  }

}
