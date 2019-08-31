import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from './filter.actions';
import { Todo } from '../todo/models/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todo: Todo[], filtro: validFilters): Todo[] {
    switch(filtro)
    {
      case validFilters.COMPLETADOS:
        return todo.filter(f => f.completado);
      case validFilters.PENDIENTES:
        return todo.filter(f => !f.completado);
      case validFilters.TODOS:
        return todo;
    }
  }

}
