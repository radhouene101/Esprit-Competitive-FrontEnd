import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../../services/radhouene/services/projects.service";
import {ProjectsDto} from "../../../services/radhouene/models/projects-dto";

@Component({
  selector: 'app-show-all-projects',
  templateUrl: './show-all-projects.component.html',
  styleUrls: ['./show-all-projects.component.css']
})
export class ShowAllProjectsComponent implements OnInit{
  constructor(
    private projectService:ProjectsService
  ) {
  }
  projects:ProjectsDto[]=[]
  getAllProject(){
    this.projectService.getAllProjects().subscribe({
      next : (data)=>{
        this.projects=data
      }
    })
  }
  ngOnInit(): void {
  }

}
