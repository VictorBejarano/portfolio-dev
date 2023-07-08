import { Observable } from 'rxjs';
import { Menu } from '../entities/menu.model';
import { MenuType } from '../entities/menu-type.model';
/**
 * Repositorio de Menu.
 */
export abstract class MenuRepository {
  /**
   * Obtiene los menus segun el tipo.
   */
  abstract getAllMenusByType(type: MenuType): Observable<Menu[]>;
}
