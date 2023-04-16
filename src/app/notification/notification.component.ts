import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success"[ngClass]="{fadeout: displayNotification}">
                <h3>This website uses cookies for the better user experience</h3>
                <div class="close"><button class="btn" (click)="closenotification()">X</button></div>
              </div>`,
  styles: ["div{margin:10px 0px;padding:10px 20px;text-align:center;}",
              ".close{float:right;margin-top:-50px;padding:11px 20px;}",
              ".fadeout {visibility:hidden; opacity:0; transition: visibility 0s 2s,opacity 2s linear;}"
          ]
})
export class NotificationComponent {
  displayNotification:boolean = false;

  closenotification(){
    this.displayNotification = true;
  }
}
