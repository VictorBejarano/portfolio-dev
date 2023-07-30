import {
  trigger,
  transition,
  style,
  query,
  animate,
  group,
  state,
} from '@angular/animations';

export const heroAnimation = trigger('heroAnimation', [
  state('visible', style({ opacity: 0 })),
  state('invisible', style({ opacity: 1 })),
  transition('visible <=> invisible', animate('5s ease-in-out')),
]);
