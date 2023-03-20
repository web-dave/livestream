import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { BazComponent } from './baz/baz.component';
import { FooPipe } from './foo.pipe';
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
    imports: [CommonModule, RouterModule.forChild(foo_routes), FooComponent, BarComponent, BazComponent, FooPipe]
})
export class FooModule {}
