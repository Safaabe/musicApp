import { Routes, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { ExploreComponent } from './explore/explore.component';

 
const RouterConfig: Routes=[
    {
        path:'',
        component: AppComponent,
        title:'SoundVibe'

    },
    {
        path:'explore',
        component: ExploreComponent,
        title:'explore'
    }
];
  

export default RouterConfig;
