import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ToogleTodoAction, UpdateTodoAction, DeleteTodoAction } from '../todo.actions';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtElement', {static: false}) txtElement: ElementRef;

  chkControl: FormControl;
  txtInput: FormControl;

  editando = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkControl = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkControl.valueChanges.subscribe(() => this.store.dispatch(new ToogleTodoAction(this.todo.id)));

    console.log(this.todo);
  }

  editar() {
    this.editando = true;
    setTimeout(() => this.txtElement.nativeElement.select(), 25);
  }

  terminarEdicion() {
    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      return;
    }
    this.editando = false;
    this.store.dispatch(new UpdateTodoAction(this.todo.id, this.txtInput.value));
  }

  borrarTodo() {
    this.store.dispatch(new DeleteTodoAction(this.todo.id));
  }
}
