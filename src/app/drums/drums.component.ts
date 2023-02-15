import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-drums',
  templateUrl: './drums.component.html',
  styleUrls: ['./drums.component.scss'],
})
export class DrumsComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['tick']?.currentValue?.[this.name]) {
      this.beep();
    }
  }
  @Input() name: string = 'boom';
  @Input() tick: any = {
    clap: 0,
    boom: 0,
  };
  beep() {
    const snd = new Audio(location.href + `assets/${this.name}.wav`);
    snd.play();
  }
}
