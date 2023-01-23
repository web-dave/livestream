import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BazComponent } from './baz.component';
import { RouterModule } from '@angular/router';
import { LibModule } from '../lib/lib.module';
import { API_URL } from '../api.token';

@NgModule({
  declarations: [BazComponent],
  imports: [
    CommonModule,
    LibModule,
    RouterModule.forChild([
      {
        path: '',
        component: BazComponent,
      },
    ]),
  ],
  providers: [
    {
      provide: API_URL,
      useFactory: () => {
        console.log('Baz Zing Gah');
        return 'baz.baz.baz';
      },
    },
  ],
})
export class BazModule {}
