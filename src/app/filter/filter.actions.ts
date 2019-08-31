import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Set Filter Action';

export enum validFilters {
    TODOS = 'Todos',
    COMPLETADOS = 'Completados',
    PENDIENTES = 'Pendientes'
}

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;

    constructor(public filtro: validFilters) { }
}

export type actions = SetFilterAction;
