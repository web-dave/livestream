import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HurzComponent } from './hurz.component';
import { RouterModule } from '@angular/router';
import { LibModule } from '../lib/lib.module';

@NgModule({
  declarations: [HurzComponent],
  exports: [HurzComponent],
  imports: [
    CommonModule,
    LibModule,
    RouterModule.forChild([
      {
        path: '',
        component: HurzComponent,
      },
    ]),
  ],
})
export class HurzModule {}
