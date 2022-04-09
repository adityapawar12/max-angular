import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    evenList: any = [];
    oddList: any = [];

    getIncrementer(event: any) {
        // console.log(event);
        // console.log(event % 2);
        if(event != false) {
            if(event % 2 === 0) {
                // console.log('even');
                this.evenList.push(event);
            } else if (event % 2 === 1) {
                // console.log('odd');
                this.oddList.push(event);
            }
        } else {
            this.evenList = [];
            this.oddList = [];
        }
    }
}
