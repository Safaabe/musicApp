import { Component } from '@angular/core';
import { SidebarComponentComponent } from '../sidebar-component/sidebar-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponentComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {

}
