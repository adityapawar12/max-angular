import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // undefined error
    // servers;
    // solved error
    servers: any = [];

    onAddServer() {
        this.servers.push("Another server." + String(this.servers.length+1));
    }

    onRemoveServer(id: number) {
        // console.log(this.servers[id], this.servers.indexOf(this.servers[id]));
        // solved the wrong element getting removed from array.
        this.servers.splice(id, 1);
    }
}
