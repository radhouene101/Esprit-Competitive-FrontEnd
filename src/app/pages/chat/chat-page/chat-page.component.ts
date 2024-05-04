import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/REST/User/user.service";
import {StompService} from "../../../services/oussema-services/WebSocket/Chat/stomp.service";
import {NbFocusMonitor, NbStatusService} from "@nebular/theme";
import {User} from "../../../services/User/models/user";
import {ChatBotService} from "../../../services/oussema-services/ChatBot-REST/chat-bot.service";
import {finalize} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";

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
        console.log(msg)
        console.log("updating one !!")
      });
      /*this.webSocketService.stompClient.subscribe(`/user/public`, async (payload: any) => {
          await this.fetchAndDisplayUserChat();
          const msg = JSON.parse(payload.body);
          console.log(msg);
        }
      );*/
    }, () => {
      console.log("Error connecting !!");
    });
  }
  constructor(
    private router: Router,
    private userService: UserService,
    private webSocketService: StompService,
    private ChatBot:ChatBotService,
    private sanitizer:DomSanitizer
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
        this.users.push({
          name:"GEMINI AI",
          status:"ONLINE"
        });
        response.forEach( u=> this.users.push(u))
      },
      error: (error) => {
        console.log("getting data failed!!");
        console.log(error);
      }
    });
  }

  loading:boolean=false;
  sendMessage() {
    if (this.selectedUser && this.user.name) {

      if(this.selectedUser!="GEMINI AI"){

        const chatMessage = {
          senderId: this.user.name,
          recipientId: this.selectedUser,
          content: this.message,
          timestamp: new Date()
        }
        this.webSocketService.stompClient.send('/app/chat', {}, JSON.stringify(chatMessage));
        this.classifyMessage(chatMessage.content,false,chatMessage.timestamp.toString());
      }else{
        this.loading=true;
        console.log("sending message to GEMINI !");
        this.classifyMessage(this.message,false,new Date().toString());
        this.ChatBot.sendMessage(this.message).pipe(finalize(() => this.loading = false)).subscribe({
          next:(res)=>{
            console.log("success!!");
            let data =JSON.stringify(res);
            let msg=JSON.parse(data).candidates[0].content.parts[0].text;
            console.log(msg);
            msg=this.processMarkup(msg);
            this.classifyMessage(this.sanitizer.bypassSecurityTrustHtml(msg),true,new Date().toString());
            },
          error:()=>{
            console.log("error!!")
          }
        });
      }
    }
    console.log("message sent !!");
  }
  processMarkup(text: string) {
    return text.replace(/\*/g, '');
  }

  assignSelectedUser(name: string | undefined) {
    if(this.selectedUser !=name){
      this.selectedUser = name;
      this.messages=[]
      this.fetchAndDisplayUserChat().then();
    }
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

  classifyMessage(message:any,isReply:boolean,date:string) {
    this.messages.push({
      text: message,
      date: date,
      reply: isReply,
      user: {
        name: isReply ? this.selectedUser : this.user.name,
      },
    });
  }

}
