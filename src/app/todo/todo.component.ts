import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { ToogleAllTodosAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  toogleAllTodos = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toogleAll() {
    this.toogleAllTodos = !this.toogleAllTodos;
    this.store.dispatch(new ToogleAllTodosAction(this.toogleAllTodos));
  }
}
