import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { API_URL } from './api.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  show = true;
  value = 'blue';
  url = inject(API_URL);
  date = inject(ApiService).t.getMilliseconds();
  title = 'livestream';
  ngOnInit() {
    const foo = document.querySelector('template');
    console.log(foo?.innerHTML);
  }
}
