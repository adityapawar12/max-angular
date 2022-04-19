import {Directive, ElementRef, Input, HostListener, HostBinding, OnInit, Renderer2} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    count: number = 0;
    @HostBinding('style.display') isOpen = false;

    @HostListener('click') toggleOpen() {
        // console.log(this.count);
        // console.log(this.elRef.nativeElement);
        if(this.count % 2 == 0) {
            this.renderer.setStyle(this.elRef.nativeElement.children[1], 'min-width', 'auto')
            this.renderer.setStyle(this.elRef.nativeElement.children[1], 'display', 'block')
            // console.log(this.elRef.nativeElement.children.length);
            for(let i = 0; i < this.elRef.nativeElement.children[1].children.length; i++) {
                // console.log(i);
                this.renderer.setStyle(this.elRef.nativeElement.children[1].children[i] , 'padding', '5px 10px')
            }
            this.isOpen = !this.isOpen;
        } else {
            this.renderer.setStyle(this.elRef.nativeElement.children[1], 'min-width', 'auto')
            this.renderer.setStyle(this.elRef.nativeElement.children[1], 'display', 'none')
            this.isOpen = !this.isOpen;
        }
        this.count++
    }
    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2
    ) {}

    ngOnInit(): void {
        
    } 
}
