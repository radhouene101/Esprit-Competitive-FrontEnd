import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectsDto} from "../../services/radhouene/models/projects-dto";
import {ProjectsService} from "../../services/radhouene/services/projects.service";

@Component({
  selector: 'app-show-contest',
  templateUrl: './show-contest.component.html',
  styleUrls: ['./show-contest.component.css']
})


  export class ShowContestComponent implements OnInit{
  id!:number

  constructor(
    private activatedRoute :ActivatedRoute,
    private projectsService: ProjectsService
  ) {
  }
  projectList : ProjectsDto[]=[]

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
    console.log("contest id is " , this.id)
    console.log("hello from showContestComponent")
    }

  }
