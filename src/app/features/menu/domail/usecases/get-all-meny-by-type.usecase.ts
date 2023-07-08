import { Injectable } from '@angular/core';
import { MenuRepository } from '../repositories/menu.repository';
import { MenuType } from '../entities/menu-type.model';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core';
import { Menu } from '../entities/menu.model';
/**
 * Caso de uso obtener menus por tipo.
 */
@Injectable()
export class GetAllMenusByTypeUsecase implements UseCase<Param, Menu[]> {
  /**
   * Crea una instancia de GetAllMenusByTypeUsecase.
   * @param menuRepository - Repositorio de menu.
   */
  constructor(private menuRepository: MenuRepository) {}
  /**
   * Ejecuta el caso de uso.
   * @param params - Parametros de entrada.
   * @returns - Observable.
   */
  execute(params: Param): Observable<Menu[]> {
    return this.menuRepository.getAllMenusByType(params.type);
  }
}
/**
 * Modelo de parametros de entrada. //TODO Optimizar.
 */
interface Param {
  type: MenuType;
}
