import {Injectable} from '@angular/core';
import {MatPaginatorIntl} from '@angular/material/paginator';


@Injectable()
export class PaginationRus extends MatPaginatorIntl {

  override readonly itemsPerPageLabel = 'Колличество для отображения'
  override readonly previousPageLabel = 'Назад'
  override readonly nextPageLabel = 'Вперёд'

   override getRangeLabel = (page: number, pageSize: number, length: number) => {
    const allPages = Math.ceil(length / pageSize)
    return `Страница ${page + 1} из ${allPages}`
  }
  constructor() {
    super()
  }
}


