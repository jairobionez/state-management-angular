import { Component } from "@angular/core";
import { TasksService } from '../../todo.service';

import { Task } from "../../task";

@Component({
    selector: 'task-cadastro',
    templateUrl: './task-cadastro.component.html'
})
export class TaskCadastroComponent {        

    constructor(private tasksService: TasksService) {

    }

    addTask(taskName: string){
        const task: Task = {
            id: 0,
            finalizado: false,
            iniciado: false,
            nome: taskName
        }

        this.tasksService.addTask(task);
    }
}