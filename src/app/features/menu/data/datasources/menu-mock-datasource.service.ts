import { Injectable } from '@angular/core';
import { Menu } from '../../domail/entities/menu.model';
import { Observable, of } from 'rxjs';
import { MenuRepository } from '../../domail/repositories/menu.repository';
import { QueryParams } from '@ngrx/data';
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
   * Obtiene todos los menus por consulta.
   * @param queryParams - Parametros de consulta.
   * @returns - Observable.
   */
  public getAllMenusByQuery(queryParams: QueryParams): Observable<Menu[]> {
    return of([
      {
        id: '001',
        name: 'BIENVENIDO',
        path: '/user/bob',
      },
      {
        id: '002',
        name: 'BIENVENIDO2',
        path: '/user/bob',
      },
    ]);
  }
}
