import {HttpClient} from '@angular/common/http';
import {DestroyRef, inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TodoRowItem} from '../interface/todo-interface';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private readonly path = 'https://jsonplaceholder.typicode.com/todos'
  private destroyRef = inject(DestroyRef)

  constructor(private _http: HttpClient) {

  }

  public getTodoList(): Observable<TodoRowItem[]> {
    return this._http.get<TodoRowItem[]>(this.path, {params: {}})
  }
}
