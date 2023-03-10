import { Component, inject } from '@angular/core';
import { ApiService } from './api.service';
import { API_URL } from './api.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = inject(API_URL);
  date = inject(ApiService).t.getMilliseconds();
  title = 'livestream';
}
