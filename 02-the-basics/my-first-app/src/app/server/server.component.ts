import { Component } from '@angular/core';

@Component({
  // normal selector
  // selector: 'app-server',

  // attribute selector.
  // selector: '[app-server]',

  // class selector.
  selector: '.app-server',

  // external template.
  templateUrl: './server.component.html',

  // inline template.
  // template: `
  //   <p [ngStyle]="{ backgroundColor: getColor() }">
  //     The {{ 'server' }} with ID {{ serverId }} is {{ getServerStatus() }}
  //   </p>
  // `,

  // external styling.
  styleUrls: ['./server.component.css'],

  // inline styling.
  // styles: [
  //   `
  //     p {
  //       color: dodgerblue;
  //     }
  //     .online {
  //       color: white;
  //     }
  //     .offline {
  //       color: black;
  //     }
  //   `,
  // ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = '';

  constructor() {
    this.serverStatus =
      Math.floor(Math.random() * 10) > 5 ? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'palegreen' : 'mistyrose';
  }
}
