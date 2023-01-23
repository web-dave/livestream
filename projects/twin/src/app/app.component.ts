import { Component, inject } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'twin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'twin';
  date = inject(ApiService).t.getMilliseconds();
}
