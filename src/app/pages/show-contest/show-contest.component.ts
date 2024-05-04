import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectsDto} from "../../services/radhouene/models/projects-dto";
import {ProjectsService} from "../../services/radhouene/services/projects.service";
import {ContestDto} from "../../services/radhouene/models/contest-dto";
import {ContestBalDeProjetService} from "../../services/radhouene/services/contest-bal-de-projet.service";

@Component({
  selector: 'app-show-contest',
  templateUrl: './show-contest.component.html',
  styleUrls: ['./show-contest.component.css']
})


  export class ShowContestComponent implements OnInit{
  id!:number

  constructor(
    private activatedRoute :ActivatedRoute,
    private projectsService: ProjectsService,
    private contestService : ContestBalDeProjetService
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
    this.id= this.activatedRoute.snapshot.params["id"]
    this.fillProjectList(this.id)
    this.contestService.getContestById({id : this.id}).subscribe({
      next: (value)=>{
      this.contest=value;
        console.log(this.contest);
      }
    })
    console.log("contest id is " , this.id)
    console.log("hello from showContestComponent")
    }

  voteUp(id: number | undefined) {
    //this.projectsService.
  }
}
