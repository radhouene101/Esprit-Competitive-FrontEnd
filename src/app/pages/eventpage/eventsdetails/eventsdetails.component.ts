import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Event} from "../../../services/Salim/models/event";
import {EventControllerService} from "../../../services/Salim/services/event-controller.service";
import {GroupControllerService} from "../../../services/Salim/services/group-controller.service";
import {Group} from "../../../services/Salim/models/group";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserControllerService} from "../../../services/Salim/services/user-controller.service";
import {User} from "../../../services/Salim/models/user";
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";





@Component({
  selector: 'app-eventsdetails',
  templateUrl: './eventsdetails.component.html',
  styleUrls: ['./eventsdetails.component.css']
})
export class EventsdetailsComponent implements OnInit {
  id!: number
  id1!: number
  id2!: number
  id3!: number
  id4!: number
  addForm!:FormGroup
  event!:Event
  selectedFile!: File;
  group: Group = {
    members: [] // Initialize members as an empty array
  }
  groups: Group[] = [];
  users: User[] = [];
  user!:User
  title = 'My first AGM project';
  lat !:any;
  lng!:any;
  constructor(private http: HttpClient,private act: ActivatedRoute,private groupService:GroupControllerService, private eventService: EventControllerService,private userService:UserControllerService ,private route: Router) {
  }

  ngOnInit() {
    this.id = this.act.snapshot.params['id']
    this.addForm=new FormGroup({
      name:new FormControl('',[
        Validators.required,
      ]),
      captain:new FormControl('',[
        Validators.required,
      ]),
    });
    const params = {
      id: this.id
    };
    this.eventService.getEventById(params).subscribe((data) => {
        this.event= data
      this.Setupmap();
      this.FetchGroups();
      this.FetchUsers();
      }
    )



  }
  onAddGroup(){

    this.group= this.addForm.value
    const params = {
      idevent: this.id,
      iduser1: this.id1,
      iduser2: this.id2,
      iduser3: this.id3,
      iduser4: this.id4,
      body: this.group
    };
    this.groupService.creategroupetaffecterusers(params).subscribe(response => {
        console.log('Event Updated successfully:', response);
        window.location.reload()
        // Optionally, display a success message to the user
      },
      error => {
        console.error('Error updating event:', error);
        Swal.fire('Members already assigned','','error').then(res=>window.location.reload())
        // Optionally, display an error message to the user
      }
    );

    //window.location.reload()
  }
  Setupmap(){
    this.lat = this.event.lattitude;
    this.lng = this.event.longitude;
  }
  FetchGroups(){
    this.groupService.getAllGroups().subscribe((data)=>{
      this.groups=data

    })
  }
  FetchUsers(){
   this.userService.getAllUsers().subscribe((data)=>{
     this.users=data
     console.log(JSON.stringify(data))
   })
  }
  updateId1(event: any) {
    const selectedUserId = event.target.value;
    const userId = parseInt(selectedUserId, 10);
      this.id1 = userId
      console.log(JSON.stringify(this.id1))
  }
  updateId2(event: any) {
    const selectedUserId = event.target.value;
    const userId = parseInt(selectedUserId, 10);

      this.id2 = userId
      console.log(JSON.stringify(this.id2))
  }
  updateId3(event: any) {
    const selectedUserId = event.target.value;
    const userId = parseInt(selectedUserId, 10);

      this.id3 = userId
      console.log(JSON.stringify(this.id3))

  }
  updateId4(event: any) {
    const selectedUserId = event.target.value;
    const userId = parseInt(selectedUserId, 10);

    this.id4 = userId
    console.log(JSON.stringify(this.id4))

  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(event.target.files[0])
  }
  uploadimage(){
    this.uploadEventImage().subscribe()
  }
  uploadEventImage() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    return this.http.post(`http://localhost:8083/event/${this.id}/image`, formData);
  }

}
