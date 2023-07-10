import { Observable } from 'rxjs';
import { Menu } from '../entities/menu.model';
import { QueryParams } from '@ngrx/data';
/**
 * Repositorio de Menu.
 */
export abstract class MenuRepository {
  /**
   * Obtiene los menus segun consulta.
   */
  public abstract getAllMenusByQuery(queryParams: QueryParams): Observable<Menu[]>;
}
