import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickComponent } from './stick/stick.component';
import { GlossComponent } from './gloss/gloss.component';

@NgModule({
  declarations: [StickComponent, GlossComponent],
  exports: [StickComponent, GlossComponent],
  imports: [CommonModule],
})
export class LibModule {}
