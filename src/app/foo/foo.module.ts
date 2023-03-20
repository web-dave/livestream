import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { BarComponent } from './bar/bar.component';
import { BazComponent } from './baz/baz.component';

@NgModule({
  imports: [CommonModule, FooComponent, BarComponent, BazComponent],
})
export class FooModule {}
