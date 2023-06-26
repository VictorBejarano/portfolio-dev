import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [LandingPageComponent, PresentationComponent, MenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    LandingPageRoutingModule,
  ],
})
export class LandingPageModule {}
