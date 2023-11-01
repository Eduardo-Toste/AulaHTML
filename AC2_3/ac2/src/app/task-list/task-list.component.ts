import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks = [
    { descricao: 'Comprar pão', concluida: false },
    { descricao: 'Estudar Angular', concluida: true },
    { descricao: 'Fazer exercícios', concluida: false },
    { descricao: 'Reunião com o cliente', concluida: true },
    { descricao: 'Ligar para o amigo', concluida: false },
  ];

  toggleTaskStatus(task: any) {
    task.concluida = !task.concluida;
  }
}
