import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  EntityOp,
} from '@ngrx/data';
import { MenuDataService } from './menu-data.service';
import { Menu } from '../domail/entities/menu.model';
import { MenuType } from '../domail/entities/menu-type.model';
import { Subject, takeUntil } from 'rxjs';
/**
 * Servicio Entidad Vehiculo.
 */
@Injectable()
export class MenuEntityService extends EntityCollectionServiceBase<Menu> {
  /**
   * Crea una instancia de MenuEntityService.
   * @param serviceElementsFactory - Servicio de ServiceElementsFactory.
   * @param menuDataService - Servicio datos de menu.
   */
  constructor(
    private serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private menuDataService: MenuDataService
  ) {
    super(MenuDataService.ENTITY_NAME, serviceElementsFactory);
  }
  /**
   * Obtiene todos los menus por tipo.
   * @param destroy$ - Destruye la subscripción.
   * @param type - Tipo de menu.
   */
  public getByType(destroy$: Subject<void>, type: MenuType): void {
    this.menuDataService
      .getByType(type)
      .pipe(takeUntil(destroy$))
      .subscribe((menus) => {
        this.createAndDispatch(EntityOp.ADD_ALL, menus);
      });
  }
}
