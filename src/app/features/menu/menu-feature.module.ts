import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  EntityDataModule,
  EntityDefinitionService,
  EntityDataService,
} from '@ngrx/data';
import { environment } from 'src/environments/environment';
import { MenuDataSourceImpl } from './data/datasources/menu-datasource.service';
import { MenuMockDataSourceImpl } from './data/datasources/menu-mock-datasource.service';
import { MenuRepository } from './domail/repositories/menu.repository';
import { GetAllMenusByQueryUsecase } from './domail/usecases/get-all-meny-by-query.usecase';
import { entityConfig } from './infrastructure/entity.metadata';
import { MenuDataService } from './infrastructure/menu-data.service';
import { MenuEntityService } from './infrastructure/menu-entity.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntityDataModule.forRoot({}),
  ],
  providers: [
    MenuDataService,
    MenuEntityService,
    GetAllMenusByQueryUsecase,
    {
      provide: MenuRepository,
      useClass: environment.production
        ? MenuDataSourceImpl
        : MenuMockDataSourceImpl,
    },
  ],
})
export class MenuFeatureModule {
  /**
   * Cre una instancia de MenuFeatureModule.
   * @param eds - Servicio definicion de entidad.
   * @param entityDataService - Servicio datos de entidad
   * @param menuDataService - Servicio de menu.
   */
  public constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private menuDataService: MenuDataService
  ) {
    this.eds.registerMetadataMap(entityConfig.entityMetadata);
    this.entityDataService.registerService(
      MenuDataService.ENTITY_NAME,
      this.menuDataService
    );
  }
}
