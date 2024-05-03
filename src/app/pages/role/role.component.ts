import {Component, OnInit} from '@angular/core';
import {User} from "../../services/Role/models/user";
import {Role} from "../../services/Role/models/role";
import {UserControllerService} from "../../services/Role/services/user-controller.service";
import {RoleControllerService} from "../../services/Role/services/role-controller.service";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit{
  ngOnInit(): void {

    this.getallUsers();
    this.getallRoles();
  }
  constructor(private userservice:UserControllerService,private roleservice:RoleControllerService) {
  }
  listUsers!:User[]
  listRoles!:Role[]
  userid!:number
  roleid!:number

  getallRoles(){
    this.roleservice.getallRoles().subscribe((data)=>{
      this.listRoles=data
      console.log("all roles:"+JSON.stringify(this.listRoles))

    })
  }

  affecterRoleToUser(){
    const params = {       userId: this.userid,       roleId: this.roleid     };
    this.roleservice.affectRoleToUser(params).subscribe()
  }
  getuserid(event:any){
    const selectedUserId = event.target.value;
    const userId = parseInt(selectedUserId, 10);
    this.userid=userId;
    console.log(JSON.stringify(this.userid))

  }

  getroleid(event:any){
    const selectedroleId = event.target.value;
    const roleId = parseInt(selectedroleId, 10);
    this.roleid=roleId;
  }

  getallUsers(){
   // this.roleservice.showAllRoles()
   this.userservice.getAllUsers().subscribe((data)=>{
     this.listUsers=data;
     console.log(JSON.stringify(this.listUsers))
   })
  }



}
