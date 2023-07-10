import { Injectable } from '@angular/core';
import { MenuRepository } from '../repositories/menu.repository';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core';
import { Menu } from '../entities/menu.model';
import { QueryParams } from '@ngrx/data';
/**
 * Caso de uso obtener menus por tipo.
 */
@Injectable()
export class GetAllMenusByQueryUsecase implements UseCase<QueryParams, Menu[]> {
  /**
   * Crea una instancia de GetAllMenusByTypeUsecase.
   * @param menuRepository - Repositorio de menu.
   */
  public constructor(private menuRepository: MenuRepository) {}
  /**
   * Ejecuta el caso de uso.
   * @param params - Parametros de entrada.
   * @returns - Observable.
   */
  public execute(params: QueryParams): Observable<Menu[]> {
    return this.menuRepository.getAllMenusByQuery(params);
  }
}
