import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  el: HTMLElement;

  constructor(private renderer: Renderer2, private element: ElementRef) { 
    this.el = element.nativeElement;
  }

  @HostListener('mouseenter')
  onHover() {
    this.renderer.setStyle(this.el, 'color', 'yellow');
  }

  @HostListener('mouseleave')
  onBlur() {
    this.renderer.setStyle(this.el, 'color', 'black');
  }

}
