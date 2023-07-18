import { Injectable } from '@angular/core';
import { Menu } from '../../domail/entities/menu.model';
import { Observable, of } from 'rxjs';
import { MenuRepository } from '../../domail/repositories/menu.repository';
import { MenuType } from '../../domail/entities/menu-type.model';
import * as mock from '../mock/menu.mock.json';
/**
 * Fuente de datos falsos de Menu.
 */
@Injectable()
export class MenuMockDataSourceImpl implements MenuRepository {
  /**
   * Crea una instancia de MenuDataSourceImpl.
   */
  public constructor() {}
  /**
   * Obtiene todos los menus por tipo.
   * @param type - Tipo de menu.
   * @returns - Observable.
   */
  public getAllMenusByType(type: MenuType): Observable<Menu[]> {
    return of(
      (JSON.parse(JSON.stringify(mock)).default as Array<Menu>).filter(
        (item) => item.type === type
      )
    );
  }
}
