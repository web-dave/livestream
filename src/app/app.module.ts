import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { API_URL } from './api.token';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { BazModule } from './baz/baz.module';
import { FooComponent } from './foo/foo.component';
import { HurzModule } from './hurz/hurz.module';
import { ColorDirective } from './color.directive';
import { CompositionComponent } from './composition/composition.component';

@NgModule({
  declarations: [AppComponent, FooComponent, CompositionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarComponent,
    HurzModule,
    ColorDirective,
  ],
  providers: [
    {
      provide: API_URL,
      useValue: 'my.url.com',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
