import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const app_routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./foo/foo-routing.module').then((esm) => esm.foo_routes),
  },
];
