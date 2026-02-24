import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {BehaviorSubject, Observable, Subject, tap} from 'rxjs';
import {TodoService} from '../../service/todo-service';
import {AsyncPipe} from '@angular/common';
import {TodoRowItem} from '../../interface/todo-interface';
import {log} from 'node:util';


@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  private _todoService = inject(TodoService)

  listTodo$!: Observable<TodoRowItem[]>

  constructor() {
  }

  ngOnInit(): void {
    this.listTodo$ = this._todoService.getTodoList().pipe(tap(v => console.log('tap', v)));

  }

  prevTodos() {

  }

  nextTodos() {

  }
}
