import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sidebar-component/sidebar-component.component.html',
  styleUrl :'./sidebar-component/sidebar-component.component.css'
})
export class AppComponent {
  title = 'musicApp';
}
