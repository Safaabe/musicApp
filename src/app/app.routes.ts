import { Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: 'explore', component: ExploreComponent, title: "Explore" },
      // Add more routes like Albums, Favorites, etc.
    ]
  },
];
