import { Component,OnInit } from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {ContestBalDeProjetService} from "../../../services/radhouene/services/contest-bal-de-projet.service";
import {ProjectsService} from "../../../services/radhouene/services/projects.service";
import {UserService} from "../../../services/REST/User/user.service";
import {ContestDto} from "../../../services/radhouene/models/contest-dto";
import {ProjectsDto} from "../../../services/radhouene/models/projects-dto";
import {UserHelperService} from "../../../services/userHelper/user-helper.service";
import {User} from "../../../services/User/models/user";
import {Role} from "../../../services/User/models/role";
import {JwtHelperService} from "@auth0/angular-jwt";
import {HelperService} from "../../../services/helper/helper.service";



@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit{
  constructor(

    private breakpointObserver: BreakpointObserver,
    private projetService : ProjectsService,
    private contestService :ContestBalDeProjetService,

    private jwtHelper : HelperService

  ) { }

  contestList:Array<ContestDto> = [];
  getContestList(){
    this.contestService.getAllContests().subscribe(
    (data)=>{
      this.contestList=data
      //console.log(JSON.stringify(this.contestList));
    }
    )
  }
  projectList:Array<ProjectsDto>=[]
  getWinnersProjects(){
    this.projetService.getAllWinners().subscribe(
      (data)=>{
        this.projectList=data
        //console.log(JSON.stringify(this.projectList))
      }
    )
  }
  myUser:any={}
  ngOnInit(): void {
    console.log(this.jwtHelper.userFullName)
    console.log(this.jwtHelper.userId)

    this.getContestList()
    this.getWinnersProjects();
  }


}
