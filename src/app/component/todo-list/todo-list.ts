import {Component, effect, inject, signal, viewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {TodoRowItem} from '../../interface/todo-interface';
import {PaginationRus} from '../../service/paginationRus';
import {TodoService} from '../../service/todo-service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {HttpClient} from '@angular/common/http';
import {MatButton} from '@angular/material/button';


type IRowNames = keyof TodoRowItem;

@Component({
  selector: 'app-todo-list',
  imports: [MatPaginatorModule, MatTableModule, MatButton],
  standalone: true,
  providers: [{useClass: PaginationRus, provide: MatPaginatorIntl}],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {

  private readonly _data = inject(TodoService);

  //TODO перенести в сервис
  private _http = inject(HttpClient);

  public isLoading = signal(false);

  public readonly rowNames: IRowNames[] = [
    'id',
    'title',
    "status",
    "priority"
  ];

  public readonly paginationSize = [10, 30, 62]

  public readonly dataSource = new MatTableDataSource<TodoRowItem>([]);
  public readonly paginatorView = viewChild<MatPaginator>('paginator');

  public readonly stateData$$ = this._data.state$$;

  constructor() {

    effect(() => {
      this.dataSource.data = this.stateData$$().data;
      this.dataSource.paginator = this.paginatorView();
    })
  };

  //TODO перенести в сервис
  public resetTodoData(): void {
    this.isLoading.set(true)
    this._http.post('http://localhost:4947/todos', {}, {params: {aaaaa: '11111', bbbbbb: '22222'}}).subscribe()
  };

}
