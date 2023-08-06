import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { IParticlesProps } from 'ng-particles';
import * as particlesConfig from 'src/app/configs/particles.config.json';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { heroAnimation } from './animations/hero-animations';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
})
export class LandingPageComponent implements OnInit {
  menuHideQuery: MediaQueryList;
  id = 'backgroud_particles';
  particlesOptions: IParticlesProps;
  constructor(
    private contexts: ChildrenOutletContexts,
    media: MediaMatcher
  ) {
    this.menuHideQuery = media.matchMedia('(max-width: 1154px)');
    this.particlesOptions = JSON.parse(JSON.stringify(particlesConfig)).default;
  }
  ngOnInit(): void {

    console.log();
  }
  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
