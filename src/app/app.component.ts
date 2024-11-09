import { NavbarComponent } from './navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponentComponent,HomeComponent,NavbarComponent],
  template: `
  <main>
  <section class="home"></section>
  <app-sidebar-component></app-sidebar-component>  
  <app-navbar></app-navbar>

  </main>
  `, 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musicApp';
}
