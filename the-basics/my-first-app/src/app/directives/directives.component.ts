import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  displayPassword: boolean = false;
  log: any = [];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.displayPassword = !this.displayPassword;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
