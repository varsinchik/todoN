import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { TodoService } from './service/todo-service';
import { Observable, Subject } from 'rxjs';

interface Todo {
  completed: boolean,
  userId: number,
  id: number,
  title: string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class App {

}
