import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, interval, tap } from 'rxjs';
import { BeatService } from './beat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('inbut')
  t!: QueryList<ElementRef<HTMLInputElement>>;
  tones: { name: string; active: boolean; bar: number }[] = [];
  beat = inject(BeatService);
  bar = 1;
  i = 0;
  speed = 60;
  title = 'livestream';
  events$$ = new ReplaySubject<number>(3);
  value = 0;
  mach = this.beat.takt$.pipe(
    tap((d) => {
      this.bar = d.bar;
    })
  );
  ngAfterViewInit(): void {
    this.getTones();
  }
  restart(): void {
    this.getTones();
  }
  getTones() {
    this.tones = this.t.map(({ nativeElement }) => {
      console.log(nativeElement);
      const n = nativeElement.name.split('_');
      return {
        name: n[0],
        active: nativeElement.checked,
        bar: Number(n[1]),
      };
    });
    console.table(this.tones);
    this.beat.setBars(this.tones);
    this.setBpm(this.speed + '');
  }
  setBpm(value: string) {
    const v = Number(value);
    if (v >= 1 && v <= 200) {
      this.beat.bpmSub.next(Number(value));
    }
  }
  start() {
    this.events$$.subscribe({
      next: (data) => {
        console.log('next', data);
        this.value = data;
      },
    });
  }
  send() {
    this.i++;
    this.events$$.next(this.i);
  }
}
