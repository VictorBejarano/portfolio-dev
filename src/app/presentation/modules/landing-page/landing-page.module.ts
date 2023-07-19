import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './components/menu/menu.component';
import { MenuFeatureModule } from 'src/app/features/menu/menu-feature.module';
import { LetDirective, LetModule } from '@ngrx/component';
import { ButtonLandingMenuComponent } from './components/button-landing-menu/button-landing-menu.component';
import { WhoIAmComponent } from './pages/who-i-am/who-i-am.component';
import { NgParticlesModule } from 'ng-particles';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    PresentationComponent,
    MenuComponent,
    ButtonLandingMenuComponent,
    WhoIAmComponent,
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    NgParticlesModule,
    LetModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MenuFeatureModule,
    LandingPageRoutingModule,
  ],
})
export class LandingPageModule {}
