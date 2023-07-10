import { DefaultDataService, HttpUrlGenerator, QueryParams } from '@ngrx/data';
import { Menu } from '../domail/entities/menu.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetAllMenusByQueryUsecase } from '../domail/usecases/get-all-meny-by-query.usecase';

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
   * Crea una instancia de FinancialPlansDataService.
   * @param enviroment - Enviroment.
   * @param http - Servicio HttpClient.
   * @param httpUrlGenerator - Servicio HttpUrlGenerator.
   */
  public constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private getAllMenusByQueryUsecase: GetAllMenusByQueryUsecase
  ) {
    super(MenuDataService.ENTITY_NAME, http, httpUrlGenerator);
  }
  public override getWithQuery(queryParams: QueryParams): Observable<Menu[]> {
    return this.getAllMenusByQueryUsecase.execute(queryParams);
  }
}
