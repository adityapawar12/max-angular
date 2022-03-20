import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: any = '';
  serverCreated: boolean = false;
  servers: any = ['Testserver 1', 'Testserver 2'];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  // function that gets event values.
  // onUpdateServerName(event: Event) {
  //   // console.log((<HTMLInputElement>event.target).value);
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
