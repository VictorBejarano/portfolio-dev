import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon[type]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() public iconM!: string;
  @Input() public iconFW!: IconProp;
  @Input() public type!: 'material' | 'fw';

  constructor() {}

  ngOnInit(): void {}
}
