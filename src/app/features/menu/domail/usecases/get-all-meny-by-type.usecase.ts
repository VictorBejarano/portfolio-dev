import { Injectable } from '@angular/core';
import { MenuRepository } from '../repositories/menu.repository';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core';
import { Menu } from '../entities/menu.model';
import { MenuType } from '../entities/menu-type.model';
/**
 * Caso de uso obtener menus por tipo.
 */
@Injectable()
export class GetAllMenusByTypeUsecase implements UseCase<Params, Menu[]> {
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
  public execute(params: Params): Observable<Menu[]> {
    return this.menuRepository.getAllMenusByType(params.type);
  }
}
/**
 * Interface de Parametros.
 */
interface Params {
  /**
   * Tipo de menu.
   */
  type: MenuType;
}
