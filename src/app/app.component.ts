import { NavbarComponent } from './navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { ExploreComponent } from './explore/explore.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponentComponent,NavbarComponent,ExploreComponent],
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musicApp';
}

