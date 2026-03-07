import {Routes} from '@angular/router';
import {Dashboard} from './component/dashboard/dashboard';
import {TodoList} from './component/todo-list/todo-list';

export const routes: Routes = [
    {path: '', component: Dashboard},
    {path: 'todo-list', component: Dashboard},
    {path: 'todo-item', component: TodoList}
];
