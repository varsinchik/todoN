import {Component, computed, inject, signal} from '@angular/core';
import {MatPaginatorIntl, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {TodoRowItem} from '../../interface/todo-interface';
import {PaginationRus} from '../../service/paginationRus';
import {TodoService} from '../../service/todo-service';

@Component({
  selector: 'app-todo-list',
  imports: [MatPaginatorModule],
  standalone: true,
  providers: [{useClass: PaginationRus, provide: MatPaginatorIntl}],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {

  private readonly startSizeOption = 5
  private readonly _data = inject(TodoService)
  private pageIndex = signal(0)
  private pageSize = signal(this.startSizeOption)
  private allTodoPagData$$ = this._data.todoData$$

  public totalLength = signal(this.allTodoPagData$$().length)
  public pSizeOptions = [this.startSizeOption, 10, 33]

  public displayedTodos$$ = computed(() => {
    const data: TodoRowItem[] = this.allTodoPagData$$()

    const start = this.pageIndex() * this.pageSize()
    const end = start + this.pageSize()
    return data.slice(start, end)
  })

  constructor() {
  }

  onChangePaginator(event: PageEvent): void {
    this.pageSize.set(event.pageSize);
    this.pageIndex.set(event.pageIndex)
  }

}
