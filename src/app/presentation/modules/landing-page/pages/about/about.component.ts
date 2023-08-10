import { Component } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  logos: string[];
  constructor() {
    this.logos = ['angular', 'ngrx', 'nx', 'firebase', 'flutter'];
  }
}
