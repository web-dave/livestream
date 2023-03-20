import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { BazComponent } from './baz/baz.component';
import { FooPipe } from './foo.pipe';
import { FooRoutingModule } from './foo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FooRoutingModule,
    FooComponent,
    BarComponent,
    BazComponent,
    FooPipe,
  ],
})
export class FooModule {}
