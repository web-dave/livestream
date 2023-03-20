import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { app_routes } from './app/app-routes';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withDebugTracing } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(app_routes, withDebugTracing()),
  ],
}).catch((err) => console.error(err));
