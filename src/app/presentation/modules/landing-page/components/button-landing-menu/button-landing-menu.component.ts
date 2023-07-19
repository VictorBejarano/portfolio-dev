import { Component, Input } from '@angular/core';
/**
 * Componente boton menu.
 */
@Component({
  selector: 'app-button-landing-menu[name][path]',
  templateUrl: './button-landing-menu.component.html',
  styleUrls: ['./button-landing-menu.component.scss'],
})
export class ButtonLandingMenuComponent {
  /**
   * Ruta.
   */
  @Input() public path!: string;
  /**
   * Nombre.
   */
  @Input() public name!: string;
}
