import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {TodoRowItem} from '../interface/todo-interface';
import {toSignal} from '@angular/core/rxjs-interop';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private _http = inject(HttpClient);

  private readonly _path = 'https://jsonplaceholder.typicode.com/todos'
  private readonly _getData$ = this._http.get<TodoRowItem[]>(this._path)

  public readonly todoData$$ = toSignal(this._getData$, {initialValue: []})
}
