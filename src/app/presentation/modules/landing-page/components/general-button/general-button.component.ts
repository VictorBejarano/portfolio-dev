import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-general-button[type]',
  templateUrl: './general-button.component.html',
  styleUrls: ['./general-button.component.scss'],
})
export class GeneralButtonComponent implements OnInit {
  @Input() public iconM!: string;
  @Input() public iconFW!: IconProp;
  @Input() public type!: 'material' | 'fw';
  @Input() public title!: string;

  constructor() {}

  ngOnInit(): void {}
}
