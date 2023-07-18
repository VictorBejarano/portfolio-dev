import { MenuType } from './menu-type.model';

/**
 * Modelo de cada opcion menu.
 */
export interface Menu {
  /**
   * Codigo.
   */
  id: string;
  /**
   * Ruta del menu.
   */
  path: string;
  /**
   * Nombre a mostrar
   */
  name: string;
  /**
   * Tipo.
   */
  type: MenuType;
}
