import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/REST/User/user.service";
import {StompService} from "../../../services/oussema-services/WebSocket/Chat/stomp.service";
import {NbFocusMonitor, NbStatusService} from "@nebular/theme";
import {User} from "../../../services/User/models/user";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
  providers: [NbStatusService, NbFocusMonitor]
})
export class ChatPageComponent implements OnInit {
  users: User[] = [];
  user: User ={};
  message!: string;
  selectedUser!: string | undefined;
  messages: any[] = [];
  ngOnInit(): void {
    if (!sessionStorage.getItem('userToken')) {
      this.router.navigate(['notfound'])
    } else {
      this.userService.getUserData();
    }

    this.displayData();
    this.displayUsers();
    this.webSocketService.stompClient.connect({}, () => {
      this.webSocketService.stompClient.subscribe(`/user/${this.user.name}/queue/messages`,
        async (payload: any) => {
        await this.fetchAndDisplayUserChat();
        const msg = JSON.parse(payload.body);

        console.log("updating one !!")
      });
      this.webSocketService.stompClient.subscribe(`/user/public`, async (payload: any) => {
        await this.fetchAndDisplayUserChat();
        const msg = JSON.parse(payload.body);
        console.log(msg);
      }
      );
    }, () => {
      console.log("Error connecting !!");
    });
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private webSocketService: StompService,
  ) {

  }

  displayData() {
    let res = this.userService.getUserData();
    res.subscribe({
      next: (response) => {
        this.user = <User>response;
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
      this.webSocketService.stompClient.send('/app/chat', {}, JSON.stringify(chatMessage));
      this.classifyMessage(chatMessage.content,false,chatMessage.timestamp.toString());
    }
    console.log("message sent !!");
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

    this.messages=[];
    userChat.forEach((chat: any) => {
     this.classifyMessage(chat.content,chat.senderId!=this.user.name,chat.timestamp);
    })
  }

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
