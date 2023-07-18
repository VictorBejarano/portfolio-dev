import { Observable } from 'rxjs';
import { Menu } from '../entities/menu.model';
import { MenuType } from '../entities/menu-type.model';
/**
 * Repositorio de Menu.
 */
export abstract class MenuRepository {
  /**
   * Obtiene todos los menus por tipo.
   * @param type - Tipo de menu.
   * @returns - Observable.
   */
  public abstract getAllMenusByType(type: MenuType): Observable<Menu[]>;
}
