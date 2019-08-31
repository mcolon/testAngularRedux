import { Action } from '@ngrx/store';
export const AGREGAR_TODO = '[Todo] Agregar Todo Acción';
export const TOOGLE_TODO = '[Todo] Toogle Todo Acción';
export const UPDATE_TODO = '[Todo] Update Todo Acción';
export const DELETE_TODO = '[Todo] Delete Todo Acción';
export const TOOGLE_ALL_TODOS = '[Todo] Toogle All Todos Acción';
export const CLEAR_ALL_TODOS = '[Todo] Clear All Todos Acción';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public tarea: string) {
    }
}

export class ToogleTodoAction implements Action {
    readonly type = TOOGLE_TODO;

    constructor(public id: number) {
    }

}

export class UpdateTodoAction implements Action {
    readonly type = UPDATE_TODO;

    constructor(public id: number, public texto: string) {
    }
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;

    constructor(public id: number) {
    }
}

export class ToogleAllTodosAction implements Action {
    readonly type = TOOGLE_ALL_TODOS;

    constructor(public completado: boolean) {
    }
}

export class ClearCompletedTodosAction implements Action {
    readonly type = CLEAR_ALL_TODOS;

    constructor() {
    }
}

export type Acciones =  AgregarTodoAction |
                        ToogleTodoAction |
                        UpdateTodoAction |
                        DeleteTodoAction |
                        ToogleAllTodosAction |
                        ClearCompletedTodosAction;
