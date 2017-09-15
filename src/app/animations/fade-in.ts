import { trigger, style, animate, transition } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate(500, style({ opacity: 1 }))
  ]),
  transition('* => void', [
    animate(500, style({ opacity: 0 }))
  ])
])
