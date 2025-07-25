import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {trigger, transition, style, animate} from '@angular/animations';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: 
  [
    trigger('fadeIn', 
      [
        transition(':enter', 
          [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            animate('1500ms ease-in', 
              style({ opacity: 1, transform: 'translateY(0)' }))
          ]
        )
      ]),
      
    trigger('fadeInDelayed', 
      [
        transition(':enter',
          [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            animate('800ms 1s ease-out',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ]
        )
      ])
  ]
})

export class AppComponent {
  title = 'VTuber';
}
