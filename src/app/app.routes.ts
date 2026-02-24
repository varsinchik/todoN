import { Routes } from '@angular/router';
import { Dashboard } from './component/dashboard/dashboard';
import { App } from './app';
import { TodoList } from './component/todo-list/todo-list';
import { TodoItem } from './component/todo-item/todo-item';

export const routes: Routes = [
    {path: '', component: Dashboard},
    {path: 'todo-list', component: TodoList},
    {path: 'todo-item', component: TodoItem}
];
