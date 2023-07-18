import { Injectable } from '@angular/core';
import { Menu } from '../../domail/entities/menu.model';
import { Observable, of } from 'rxjs';
import { MenuRepository } from '../../domail/repositories/menu.repository';
import { MenuType } from '../../domail/entities/menu-type.model';
/**
 * Fuente de datos de Menu.
 */
@Injectable()
export class MenuDataSourceImpl implements MenuRepository {
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
    return of([
      {
        id: '001',
        name: 'BIENVENIDO',
        path: '',
      },
      {
        id: '002',
        name: 'BIENVENIDO2',
        path: '',
      },
    ]);
  }
}
