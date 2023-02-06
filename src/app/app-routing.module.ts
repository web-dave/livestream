import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersGuard } from './users.guard';

export const app_routes: Routes = [
  {
    path: 'home', // '/^/home$/'
    component: HomeComponent,
  },
  {
    path: 'users',
    canActivate: [UsersGuard],
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
