import { Injectable, SimpleChanges } from '@angular/core';
import { Subject, map, switchMap, interval, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeatService {
  kill$$ = new Subject();
  bpm = 60;
  bpmSub = new Subject<number>();
  takt$ = this.bpmSub
    .pipe(
      map((data) => (60 / data) * 1000),
      switchMap((b) => interval(b)),
      takeUntil(this.kill$$),
      map((data) =>
        data % 2 === 0
          ? {
              clap: 1,
              boom: 0,
            }
          : {
              clap: 0,
              boom: 1,
            }
      )
    )
    .pipe(tap((data) => console.log(data)));
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes?.['bpm']?.currentValue);
    if (!!changes?.['bpm']?.currentValue) {
      this.bpmSub.next(this.bpm);
    }
  }
  stop() {
    this.kill$$.next(1);
  }
}
