import { Component, OnInit } from '@angular/core';
import { LetDirective, LetModule, PushPipe } from '@ngrx/component';
import { MenuEntityService } from 'src/app/features/menu';
import { MenuType } from 'src/app/features/menu/domail/entities/menu-type.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public items: any[];

  constructor(public menuEntityService: MenuEntityService) {
    this.items = [];
  }

  ngOnInit(): void {
    this.menuEntityService.entities$.subscribe((res) => {
      console.log('SAT', res);
    });
    this.menuEntityService.getWithQuery({ type: MenuType.LANDING });
  }
}
