import { NavbarComponent } from './navbar/navbar.component';
import { Component } from '@angular/core';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SidebarComponentComponent,NavbarComponent,ExploreComponent],
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musicApp';
}

