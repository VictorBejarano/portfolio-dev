import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';
import { MenuEntityService } from './menu-entity.service';
import { MenuDataService } from './menu-data.service';

const entityMetadata: EntityMetadataMap = {
  Menu: {},
};
const pluralNames = {
  Menu: MenuDataService.ENTITY_PLURAL_NAME,
};
export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
