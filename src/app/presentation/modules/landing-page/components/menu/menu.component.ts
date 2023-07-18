import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MenuEntityService } from 'src/app/features/menu';
import { MenuType } from 'src/app/features/menu/domail/entities/menu-type.model';
import { Menu } from 'src/app/features/menu/domail/entities/menu.model';
/**
 * Compomente de Menu.
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  /**
   * Entidades menu.
   */
  public entities$: Observable<Menu[]>;
  /**
   * Sujeto destructor.
   */
  private destroy$: Subject<void>;
  /**
   * Crea una instancia de MenuComponent
   * @param menuEntityService - Servicio entidad menu.
   */
  constructor(private menuEntityService: MenuEntityService) {
    this.destroy$ = new Subject<void>();
    this.entities$ = this.menuEntityService.entities$;
  }
  /**
   * Inicializa el componente.
   */
  ngOnInit(): void {
    this.menuEntityService.getByType(this.destroy$, MenuType.LANDING);
  }
  /**
   * Destruye el componente.
   */
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
