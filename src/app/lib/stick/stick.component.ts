import { Component, inject } from '@angular/core';
import { API_URL } from 'src/app/api.token';

@Component({
  selector: 'app-stick',
  templateUrl: './stick.component.html',
  styleUrls: ['./stick.component.scss'],
})
export class StickComponent {
  url = inject(API_URL);
}
