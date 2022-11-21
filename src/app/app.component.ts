import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, interval, of, timer } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  todosObs: Observable<Array<Todo>> = new Observable<Array<Todo>>();

  ngOnInit() {
    this.form = this.fb.group({
      todo: [new Todo(2, 'todo #2')],
    });

    this.todosObs = of([
      new Todo(1, 'title 1'),
      new Todo(2, 'title 2'),
      new Todo(3, 'title 3'),
      new Todo(4, 'title 4'),
    ]);
  }

  compareTodos(t1: Todo, t2: Todo): boolean {
    return t1 && t2 && t1.id === t2.id;
  }
}

export class Todo {
  id: number;
  title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
