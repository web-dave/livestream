import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  inject,
  OnInit,
} from '@angular/core';
import { signal } from 'src/signals';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements DoCheck, OnInit {
  i = signal(0);
  infos = signal(null);
  cdr = inject(ChangeDetectorRef);
  ngDoCheck(): void {
    console.log('Hallo aus BAR');
  }
  ngOnInit(): void {
    this.i.update((n) => n + 7);
    // setInterval(() => {
    //   this.i.update((n) => n + 1);
    //   // this.i++;
    //   console.log(this.i());
    // this.cdr.detectChanges();
    // }, 2000);
    fetch('https://swapi.dev/api/people/1')
      .then((data) => data.json())
      .then((data) => this.infos.set(data));
  }

  los() {
    this.i.update((n) => n + 1);
    this.cdr.detectChanges();
  }
}
