import {HttpClient, httpResource} from '@angular/common/http';
import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {TodoRowItem} from '../interface/todo-interface';
import {toSignal} from '@angular/core/rxjs-interop';
import {log} from 'node:util';
import {combineLatest} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  //private readonly _path = 'https://jsonplaceholder.typicode.com/todos'
  private readonly _path = 'http://localhost:4947/todos'

  private _stateData = httpResource<TodoRowItem[]>(() => this._path);

  public readonly state$$ = computed(() => ({
    data: this._stateData.value() || [],
    isLoading: this._stateData.isLoading(),
    error: this._stateData.error(),
  }))


}
