import { Component } from '@angular/core';

@Component({
  selector: '[app-warning-alert]',
  template: `
    <p class="warning-class">this is the warning alert compoent.</p>
  `,
  styles: [
    `
      .warning-class {
        background-color: mistyrose;
        border: 2px solid red;
        padding: 20px;
      }
    `,
  ],
})
export class WarningAlertComponent {}
