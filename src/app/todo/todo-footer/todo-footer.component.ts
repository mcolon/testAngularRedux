import { Component, OnInit } from '@angular/core';
import { validFilters, SetFilterAction } from 'src/app/filter/filter.actions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ClearCompletedTodosAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtros: validFilters[] = Object.keys(validFilters).map(k => validFilters[k]);
  selectedFilter: validFilters;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log(this.filtros);
    this.store.subscribe(state => {
      this.selectedFilter = state.filtro;
      this.pendientes = state.todos.filter(t => !t.completado).length;
    });
  }

  cambiarFiltro(filter: validFilters) {
    this.store.dispatch(new SetFilterAction(filter));
  }

  clearAll() {
    this.store.dispatch(new ClearCompletedTodosAction());
  }

}
