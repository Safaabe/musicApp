import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponentComponent,HomeComponent],
  templateUrl: './home/home.component.ts', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musicApp';
}
