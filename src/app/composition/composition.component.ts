import { Component, ElementRef, SimpleChanges } from '@angular/core';
import { ColorDirective } from '../color.directive';

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.scss'],
  hostDirectives: [
    { directive: ColorDirective, inputs: ['bgColor', 'appColor: color'] },
  ],
})
export class CompositionComponent {}
