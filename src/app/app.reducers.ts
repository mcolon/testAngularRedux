import { Todo } from './todo/models/todo.model';
import { validFilters } from './filter/filter.actions';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';


export interface AppState {
    todos: Todo[];
    filtro: validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFilter.filterReducer
};
