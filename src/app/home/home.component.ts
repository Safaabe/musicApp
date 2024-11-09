import { Component } from '@angular/core';
import { SidebarComponentComponent } from '../sidebar-component/sidebar-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponentComponent],
  template:`

<div class="main-content">
  <h2>hi</h2>
</div>`
,
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {

}
