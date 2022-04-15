import { Directive, ElementRef, Input, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(/* private elRef: ElementRef, private renderer: Renderer2 */) { }

  ngOnInit(): void {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
      this.backgroundColor = this.defaultColor; 
  }

  @HostListener('mouseenter') mouseEnter(/* eventData: Event */) {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(/* eventData: Event */) {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
      this.backgroundColor = this.defaultColor; 
  }

}
