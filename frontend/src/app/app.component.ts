import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RoomComponent} from './domains/room/room.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'association-game';
}
