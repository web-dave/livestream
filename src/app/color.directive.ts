import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true,
})
export class ColorDirective implements OnChanges {
  @Input() bgColor = '#3f3f3f';
  @Input() appColor = 'red';
  hostElement!: HTMLElement;

  @HostListener('mouseover', ['$event'])
  foo(event: Event) {
    console.log('hostlistener ', event);
    this.ngOnChanges();
  }

  constructor(private elem: ElementRef) {
    // setTimeout(() => this.ngOnChanges(), 2000);
  }
  ngOnChanges(changes?: SimpleChanges): void {
    console.log(changes);
    this.elem.nativeElement.firstChild.style.backgroundColor = this.bgColor;
    this.elem.nativeElement.firstChild.style.color = this.appColor;
  }
}
