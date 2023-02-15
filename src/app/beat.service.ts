import { Injectable, SimpleChanges } from '@angular/core';
import {
  Subject,
  map,
  switchMap,
  interval,
  takeUntil,
  tap,
  filter,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeatService {
  instruments: string[] = [
    'tink',
    'clap',
    'hihat',
    'openhat',
    'ride',
    'snare',
    'kick',
    'tom',
    'boom',
  ];
  pause = true;
  bpm = 60;
  bpmSub = new Subject<number>();
  bars: { name: string; active: boolean; bar: number }[] = [];
  i = -1;
  takt$ = this.bpmSub
    .pipe(
      map((data) => (60 / data) * 1000),
      switchMap((b) => interval(b)),
      filter(() => !this.pause),
      map(() => ++this.i),
      map((v) => {
        if (v >= 8) {
          this.i = 0;
          return 0;
        }
        return v;
      }),
      tap((data) => console.log('IIIII', data)),
      map((data) => this.bars[data])
    )
    .pipe(tap((data) => console.log(data)));
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes?.['bpm']?.currentValue);
    if (!!changes?.['bpm']?.currentValue) {
      this.bpmSub.next(this.bpm);
    }
  }
  start() {
    this.pause = false;
  }
  stop() {
    this.pause = true;
  }
  setBars(tones: { name: string; active: boolean; bar: number }[]) {
    this.i = 0;
    const names: string[] = tones
      .map((t) => t.name)
      .filter((value, index, array) => array.indexOf(value) === index);

    const init: { [key: string]: number } = {};
    names.forEach((name) => (init[name] = -1));
    const bars = new Array(tones.length / names.length).fill({ ...init });

    bars[0] = { ...bars[0], [names[0]]: true };

    tones.forEach((tone) => {
      bars[tone.bar] = {
        ...bars[tone.bar],
        [tone.name]: tone.active,
        bar: tone.bar,
      };
    });
    console.log(names);
    console.table(bars);

    const ret = [];
    this.bars = bars;
  }

  playSound(name: string) {
    const snd = new Audio(location.href + `assets/${name}.wav`);
    snd.play();
  }
}
