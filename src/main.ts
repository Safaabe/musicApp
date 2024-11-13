import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import RouteConfig from './app/routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(RouteConfig), provideAnimationsAsync()

  ]
})
  .catch((err) => console.error(err));
