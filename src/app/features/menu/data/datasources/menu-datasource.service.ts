import { Injectable } from '@angular/core';
import { Menu } from '../../domail/entities/menu.model';
import { Observable } from 'rxjs';
import { MenuRepository } from '../../domail/repositories/menu.repository';
import { MenuType } from '../../domail/entities/menu-type.model';
import {
  Firestore,
  collection,
  query,
  where,
  collectionData,
} from '@angular/fire/firestore';
/**
 * Fuente de datos de Menu.
 */
@Injectable()
export class MenuDataSourceImpl implements MenuRepository {
  /**
   * Crea una instancia de MenuDataSourceImpl.
   * @param firestore - Instancia de Firestore.
   */
  public constructor(private firestore: Firestore) {}
  /**
   * Obtiene todos los menus por tipo.
   * @param type - Tipo de menu.
   * @returns - Observable.
   */
  public getAllMenusByType(type: MenuType): Observable<Menu[]> {
    return collectionData(
      query(collection(this.firestore, 'menus'), where('type', '==', type))
    ) as Observable<Menu[]>;
  }
}
