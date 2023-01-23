import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppModule as TwinModule } from '../projects/twin/src/app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

platformBrowserDynamic()
  .bootstrapModule(TwinModule)
  .catch((err) => console.error(err));
