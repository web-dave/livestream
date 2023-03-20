import { Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { BazComponent } from './baz/baz.component';
import { FooComponent } from './foo.component';

export const foo_routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FooComponent,
      },
      {
        path: 'bar',
        component: BarComponent,
      },
      {
        path: 'baz',
        component: BazComponent,
      },
    ],
  },
];
