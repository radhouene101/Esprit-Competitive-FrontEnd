import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css','../../pages/chat-page/chat-page.component.css']
})
export class MessageDetailsComponent {
  @Input()
  message:any;
  @Input()
  timestamp:any;
  @Input()
  cssClass:any;
}
