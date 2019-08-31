import * as fromFilter from './filter.actions';
export const initialState = fromFilter.validFilters.COMPLETADOS;

export function filterReducer(state = initialState, action: fromFilter.actions): fromFilter.validFilters {
    switch(action.type)
    {
        case fromFilter.SET_FILTER:
            return action.filtro;
        default: return state;
    }
 }
