import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { MenuDataService } from './menu-data.service';
import { Menu } from '../domail/entities/menu.model';
import { MenuType } from '../domail/entities/menu-type.model';

/**
 * Servicio Entidad Vehiculo.
 */
@Injectable()
export class MenuEntityService extends EntityCollectionServiceBase<Menu> {
  /**
   * Crea una instancia de FinancialPlanEntityService.
   * @param serviceElementsFactory - Servicio de ServiceElementsFactory.
   * @param dynamicSnackBarService - Servicio de snackbar.
   */
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private menuDataService: MenuDataService
  ) {
    super(MenuDataService.ENTITY_NAME, serviceElementsFactory);
  }
  public getAllByType(type: MenuType) {
    this.menuDataService.getWithQuery({
      type,
    });
  }
}
