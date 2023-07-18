import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';
import { MenuDataService } from './menu-data.service';
/**
 * Metadata.
 */
const entityMetadata: EntityMetadataMap = {
  Menu: {},
};
/**
 * Nombre plural.
 */
const pluralNames = {
  Menu: MenuDataService.ENTITY_PLURAL_NAME,
};
/**
 * Configuracion.
 */
export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
