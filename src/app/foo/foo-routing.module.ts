import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { BazComponent } from './baz/baz.component';
import { FooComponent } from './foo.component';

const foo_routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(foo_routes)],
  exports: [RouterModule],
})
export class FooRoutingModule {}
