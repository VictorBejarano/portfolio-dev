import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  supportedLanguague: string[];
  defaultLanguage: string;
  title = 'professionalPage';
  sidebarVisible = false;
  public constructor() {
    this.supportedLanguague = ['es', 'en'];
    this.defaultLanguage = 'es';
    console.log(navigator.language)
  }
}
