import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryProjectsDto} from "../../../services/radhouene/models/category-projects-dto";
import {User} from "../../../services/User/models/user";
import {ProjectsService} from "../../../services/radhouene/services/projects.service";
import {CategoryService} from "../../../services/radhouene/services/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HelperService} from "../../../services/helper/helper.service";
import {ProjectsDto} from "../../../services/radhouene/models/projects-dto";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements  OnInit{
  projectForm!:FormGroup
  niveauOptions = ['PREMIERE', 'DEUXIEME', 'TROIXIEME', 'QUATRIEME', 'CINQUEME'];
  categoryList : CategoryProjectsDto[] = [];
  user:User = {}
  constructor(
    private apiService : ProjectsService,
    private categoryService : CategoryService,
    private router: Router,
    private jwtHelper:HelperService,
    private activatedRoute : ActivatedRoute
  ) {
  }
  projectId!:number
  ngOnInit(): void {
    this.projectId=this.activatedRoute.snapshot.params["id"]
    this.categoryService.getAllCategories()
      .subscribe(
        category =>this.categoryList=category);

    this.projectForm= new FormGroup({
      categoryId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      groupName: new FormControl('', [Validators.required]),
      classe: new FormControl(''), // Optional field
      coach: new FormControl(''), // Optional field
      date: new FormControl(''), // Optional field (consider appropriate input type)
      niveau: new FormControl('', [Validators.required]),
      nominated: new FormControl(false), // Set default value for boolean
      numberOfVotes: new FormControl(0), // Set default value for number
      optionSpeciality: new FormControl(null), // Allow for null value
      scolarYear: new FormControl(''), // Optional field
      votingpool: new FormControl(false), // Set default value for boolean
      winner: new FormControl(false),
      imageUrl: new FormControl(""),
      videoUrl: new FormControl("")
    })
    this.getTheCurrentProject()
  }
  getTheCurrentProject(){
    this.apiService.getProjectById({id:this.projectId}).subscribe({
      next : (data)=>{
        this.project=data;
        this.projectForm.patchValue(this.project)
      }
    })
  }

  project!:ProjectsDto
  onSubmit() {
    this.project=this.projectForm.value
    this.project.userId=this.jwtHelper.userId
    console.log(this.jwtHelper.userId);
    this.apiService.updateProject({
      projectId: this.projectId,
      body: this.project
    })
      .subscribe({
        next : async() => console.log(this.project)
      });
    this.router.navigate(["/contest"])
  }
}
