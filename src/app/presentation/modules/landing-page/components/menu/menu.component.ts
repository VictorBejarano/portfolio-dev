import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public items: any[];

  constructor() {
    this.items = [
      {
        name: 'BIENVENIDO',
        path: '',
      },
      {
        name: 'BIENVENIDO2',
        path: '',
      },
    ];
  }

  ngOnInit(): void {}
}
