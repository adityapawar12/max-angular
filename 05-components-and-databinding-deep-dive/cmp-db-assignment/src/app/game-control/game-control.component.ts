import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  isGameOn: boolean = false;
  @Output() incrementer: any = new EventEmitter;
  eventInterval: any;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    console.log("game started.")
    this.isGameOn = true;
    this.eventInterval = setInterval( () => {
        let x = Math.floor(Math.random() * 933/Math.random());
        this.counter = this.counter + x;
        this.incrementer.emit(this.counter);
    }, 1000); 
  }

  stopGame() {
    console.log("game terminated.")
    this.isGameOn = false;
    clearInterval(this.eventInterval)
    this.counter = 0;
    this.incrementer.emit(false);
  }
}
