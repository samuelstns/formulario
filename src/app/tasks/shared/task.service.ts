import { environment } from './../../../environments/environment';
import { Task } from './task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, nomep: 'projeto 1', datai: undefined, dataf: undefined, valor: 1, risco: 2, participante: 'robon'  },
  ]
  constructor() { }

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  save(task: Task) {
    if (task.id){
      const taskArr = this.getById(task.id);
      taskArr.nomep = task.nomep;
      taskArr.dataf = task.dataf;
      taskArr.datai = task.datai;
      taskArr.valor = task.valor;
      taskArr.risco = task.risco;
      taskArr.participante = task.participante;
    }else{
      const lastId = this.tasks[this.tasks.length-1].id;
      task.id = lastId + 1;
      this.tasks.push(task);
    }
  }

  delete(id: string) {

    this
  }
}
