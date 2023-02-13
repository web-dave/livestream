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
import { Subject, BehaviorSubject, ReplaySubject, interval } from 'rxjs';
import { BeatService } from './beat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('inbut')
  tones!: QueryList<HTMLInputElement>;
  beat = inject(BeatService);
  i = 0;
  speed = 60;
  title = 'livestream';
  events$$ = new ReplaySubject<number>(3);
  value = 0;
  mach = this.beat.takt$;
  ngAfterViewInit(): void {
    console.log(this.tones);
  }
  ngOnInit(): void {}
  start() {
    this.events$$.subscribe({
      next: (data) => {
        console.log('next', data);
        this.value = data;
      },
    });
  }
  setBpm(value: string) {
    this.beat.bpmSub.next(Number(value));
  }
  send() {
    this.i++;
    this.events$$.next(this.i);
  }
}
