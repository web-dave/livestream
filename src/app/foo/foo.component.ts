import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
})
export class FooComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('Hallo aus FOO');
  }
}
