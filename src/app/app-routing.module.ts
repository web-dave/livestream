import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { FooComponent } from './foo/foo.component';

const routes: Routes = [
  {
    path: '',
    component: FooComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./baz/baz.module').then((m) => m.BazModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
