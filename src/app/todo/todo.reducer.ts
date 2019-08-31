import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';

const estadoInicial: Todo[] = [ new Todo('Tarea 1'), new Todo('Tarea 2')];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {
    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            return [...state, new Todo(action.tarea)];
        case fromTodo.TOOGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completado: !todo.completado,
                    };
                }
                return { ...todo };
            });
            case fromTodo.UPDATE_TODO:
                return state.map(todo => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            texto: action.texto,
                        };
                    }
                    return { ...todo };
                });
            case fromTodo.DELETE_TODO:
                return state.filter(todo => todo.id !== action.id );
            case fromTodo.CLEAR_ALL_TODOS:
                return state.filter(todo => !todo.completado);
            case fromTodo.TOOGLE_ALL_TODOS:
                return state.map(todo => {return {
                    ...todo,
                    completado: action.completado
                };
                });
            default: return state;
    }
}
