import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MenuComponent } from './components/menu/menu.component';
import { MenuFeatureModule } from 'src/app/features/menu/menu-feature.module';
import { LetModule } from '@ngrx/component';
import { ButtonLandingMenuComponent } from './components/button-landing-menu/button-landing-menu.component';
import { AboutComponent } from './pages/about/about.component';
import { NgParticlesModule } from 'ng-particles';
import { ContainerComponent } from './components/container/container.component';
import { IconComponent } from './components/icon/icon.component';
import { GeneralButtonComponent } from './components/general-button/general-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LandingPageComponent,
    PresentationComponent,
    MenuComponent,
    ButtonLandingMenuComponent,
    AboutComponent,
    ContainerComponent,
    IconComponent,
    GeneralButtonComponent,
  ],
  imports: [
    CommonModule,
    NgParticlesModule,
    LetModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MenuFeatureModule,
    FontAwesomeModule,
    LandingPageRoutingModule,
  ],
})
export class LandingPageModule {}
