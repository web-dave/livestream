import { Component, inject } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  // providers: [{ provide: API_URL, useValue: 'foo.bar.baz' }],
})
export class FooComponent {
  foo = inject(AppComponent);
}
