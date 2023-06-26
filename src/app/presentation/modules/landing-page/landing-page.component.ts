import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public isButtonMenuEnable: boolean;
  public mode: MatDrawerMode;

  constructor(public platform: Platform) {
    this.isButtonMenuEnable = this.platform.ANDROID || this.platform.IOS;
    this.mode = this.isButtonMenuEnable ? 'over' : 'side';
  }

  ngOnInit(): void {
    this.platform;
    console.log();
  }
}
