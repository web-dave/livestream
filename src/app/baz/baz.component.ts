import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';
import { API_URL } from '../api.token';

@Component({
  selector: 'app-baz',
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.scss'],
})
export class BazComponent {
  url = inject(API_URL);
  date = inject(ApiService).t.getMilliseconds();
}
