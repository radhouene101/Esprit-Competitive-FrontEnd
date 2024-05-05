import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-selected-user-chat',
  templateUrl: './selected-user-chat.component.html',
  styleUrls: ['./selected-user-chat.component.css']
})
export class SelectedUserChatComponent {
  @Input()
  username:any;
}
