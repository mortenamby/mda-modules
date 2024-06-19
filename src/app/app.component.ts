import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MdaTodoComponent } from '../../projects/mda-components/src/lib/mda-todo/mda-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MdaTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
