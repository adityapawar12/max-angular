import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log("constructor called.");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("the text: " + this.header.nativeElement.innerText);
    console.log("the paragraph: " + this.paragraph.nativeElement.innerText);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log("the paragraph: " + this.paragraph.nativeElement.innerText);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log("the text: " + this.header.nativeElement.innerText);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }

}
