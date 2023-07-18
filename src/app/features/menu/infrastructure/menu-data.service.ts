import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Menu } from '../domail/entities/menu.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuType } from '../domail/entities/menu-type.model';
import { GetAllMenusByTypeUsecase } from '../domail/usecases/get-all-meny-by-type.usecase';
/**
 * Servicio Data para Vehiculos.
 */
@Injectable()
export class MenuDataService extends DefaultDataService<Menu> {
  /**
   * Nombre entidad.
   */
  public static ENTITY_NAME = 'Menu';
  /**
   * Nombre entidad.
   */
  public static ENTITY_PLURAL_NAME = 'Menus';
  /**
   * Crea una instancia de MenuDataService.
   * @param enviroment - Enviroment.
   * @param http - Servicio HttpClient.
   * @param httpUrlGenerator - Servicio HttpUrlGenerator.
   */
  public constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private getAllMenusByTypeUsecase: GetAllMenusByTypeUsecase
  ) {
    super(MenuDataService.ENTITY_NAME, http, httpUrlGenerator);
  }
  /**
   * Obtiene todos los menus por tipo.
   * @param type - Tipo de menu.
   * @returns - Observable.
   */
  public getByType(type: MenuType): Observable<Menu[]> {
    return this.getAllMenusByTypeUsecase.execute({ type });
  }
}
