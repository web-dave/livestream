import { Routes } from '@angular/router';

export const app_routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./foo/foo-routing.module').then((esm) => esm.foo_routes),
  },
];
