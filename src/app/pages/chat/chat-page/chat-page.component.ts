import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/REST/User/user.service";
import {UserDetails} from "../../../models/UserDetails";
import {StompService} from "../../../services/oussema-services/WebSocket/Chat/stomp.service";
import {Socket} from "ngx-socket-io";
import {NbFocusMonitor, NbStatusService} from "@nebular/theme";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {User} from "../../../services/User/models/user";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
  providers: [NbStatusService, NbFocusMonitor]
})
export class ChatPageComponent implements OnInit, OnChanges {
  users: User[] = [];
  user: User ={};
  message!: string;
  selectedUser!: string | undefined;

  ngOnInit(): void {
    if (!sessionStorage.getItem('userToken')) {
      this.router.navigate(['notfound'])
    } else {
      this.userService.getUserData();
    }

    this.displayData();
    this.displayUsers();
    this.webSocketService.stompClient.connect({}, () => {
      this.webSocketService.stompClient.subscribe(`/user/${this.user.name}/queue/messages`, (payload: any) => {
        const msg = JSON.parse(payload.body);
        if (this.selectedUser && this.selectedUser === msg.senderId) {
          console.log(msg);
          this.messages.push({
            text: msg.text,
            date: msg.timestamp,
            reply: msg.senderId != this.user.name,
            user: {
              name: msg.senderId != this.user.name ? this.selectedUser : this.user.name,
            },
          });
        }
      });
      this.webSocketService.stompClient.subscribe(`/user/public`, (payload: any) => {
        const msg = JSON.parse(payload.body);
        if (this.selectedUser && this.selectedUser === msg.senderId) {
          console.log(msg);
        }
      });
    }, () => {
      console.log("fail")
    });
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private webSocketService: StompService,
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
    }

  displayData() {
    let res = this.userService.getUserData();
    res.subscribe({
      next: (response) => {
        this.user = <UserDetails>response;
        console.log(this.user);
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  displayUsers() {
    let res = this.userService.getUserList();
    res.subscribe({
      next: (response) => {

        console.log(response)
        this.users = response;
      },
      error: (error) => {
        console.log("getting data failed!!");
        console.log(error);
      }
    });
  }

  sendMessage() {
    if (this.selectedUser && this.user.name) {
      const chatMessage = {
        senderId: this.user.name,
        recipientId: this.selectedUser,
        content: this.message,
        timestamp: new Date()
      }
      console.log(chatMessage);
      this.webSocketService.stompClient.send('/app/chat', {}, JSON.stringify(chatMessage));
      this.fetchAndDisplayUserChat().then()
    }
  }

  assignSelectedUser(name: string | undefined) {
    this.selectedUser = name;
    if(this.messages.length==0)
      this.fetchAndDisplayUserChat().then();
  }

  updateMessage(event: any) {
    this.message = event.target.value;
  }

  async fetchAndDisplayUserChat() {
    const userChatResponse = await fetch(`http://localhost:8083/messages/${this.user.name}/${this.selectedUser}`);
    const userChat = await userChatResponse.json();
    let i:number=0;
    this.messages=[]
    userChat.forEach((chat: any) => {
      console.log(chat.content)
     this.classifyMessage(chat.content,chat.senderId!=this.user.name,chat.timestamp);
      i++;
    })
    console.log(this.messages)
  }


  messages: any[] = [];

  classifyMessage(message:string,isReply:boolean,date:string) {
    this.messages.push({
      text: message,
      date: date,
      reply: isReply,
      user: {
        name: isReply ? this.selectedUser : this.user.name,
        avatar: 'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
      },
    });
  }

}
