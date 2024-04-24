import { Component,OnInit } from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {UserService} from "../../services/radhouene/services/user.service";
import {ProjectsService} from "../../services/radhouene/services/projects.service";
import {ContestBalDeProjetService} from "../../services/radhouene/services/contest-bal-de-projet.service";
import {ContestDto} from "../../services/radhouene/models/contest-dto";


@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit{
  constructor(

    private breakpointObserver: BreakpointObserver,
    private user : UserService,
    private projetService : ProjectsService,
    private contestService :ContestBalDeProjetService
  ) { }

  contestList:Array<ContestDto> = [];
  getContestList(){
    this.contestService.getAllContests().subscribe(
    (data)=>{
      this.contestList=data
      console.log(JSON.stringify(this.contestList));
    }
    )
  }

  ngOnInit(): void {
    this.getContestList()
  }


}
