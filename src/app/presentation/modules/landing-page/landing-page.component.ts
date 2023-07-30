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

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
})
export class LandingPageComponent implements OnInit {
  id = 'backgroud_particles';
  public isButtonMenuEnable: boolean;
  public mode: MatDrawerMode;
  particlesOptions: IParticlesProps;
  constructor(
    public platform: Platform,
    private contexts: ChildrenOutletContexts
  ) {
    this.particlesOptions = JSON.parse(JSON.stringify(particlesConfig)).default;
    this.isButtonMenuEnable = this.platform.ANDROID || this.platform.IOS;
    this.mode = this.isButtonMenuEnable ? 'over' : 'side';
  }
  ngOnInit(): void {
    this.platform;
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
