import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectsDto} from "../../services/radhouene/models/projects-dto";
import {ProjectsService} from "../../services/radhouene/services/projects.service";
import {ContestDto} from "../../services/radhouene/models/contest-dto";
import {ContestBalDeProjetService} from "../../services/radhouene/services/contest-bal-de-projet.service";
import {HelperService} from "../../services/helper/helper.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-show-contest',
  templateUrl: './show-contest.component.html',
  styleUrls: ['./show-contest.component.css']
})


  export class ShowContestComponent implements OnInit{
  id!:number
  userId!:number
  voteNumber!:number

  constructor(
    private activatedRoute :ActivatedRoute,
    private projectsService: ProjectsService,
    private contestService : ContestBalDeProjetService,
    private jwtHelper : HelperService
  ) {
  }
  projectList : ProjectsDto[]=[]
  contest!:ContestDto
  fillProjectList(leId:number){
    this.projectsService.getProjectsByContest({contestId : leId}).subscribe({
      next : (data)=>{
        this.projectList=data
      }
    })
  }
  ngOnInit(): void {
    this.userId=this.jwtHelper.userId
    this.id= this.activatedRoute.snapshot.params["id"]
    this.fillProjectList(this.id)
    this.contestService.getContestById({id : this.id}).subscribe({
      next: (value)=>{
      this.contest=value;
        console.log(this.contest);
      }
    })
    }

  voteUp(id: any , voteNumber: any) {
    this.projectsService.voteUp({projectId: id, userId: this.userId}).subscribe({
      next :(data)=>{
        console.log(data , "vote successfull")
        this.voteNumber=voteNumber+1

      },error(msg){
        console.log(msg)
      }
    })
  }

  protected readonly formatNumber = formatNumber;
}
