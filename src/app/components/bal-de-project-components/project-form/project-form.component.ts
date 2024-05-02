import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectsService} from "../../../services/radhouene/services/projects.service";
import { Injectable } from '@angular/core';
import {ProjectsDto} from "../../../services/radhouene/models/projects-dto";
import {Router} from "@angular/router";
import {CategoryService} from "../../../services/radhouene/services/category.service";
import {CategoryProjectsDto} from "../../../services/radhouene/models/category-projects-dto";
import {UserService} from "../../../services/REST/User/user.service";
import {UserDetails} from "../../../models/UserDetails";



@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
@Injectable({
  providedIn: 'root', // Make sure providedIn is set to 'root'
})
export class ProjectFormComponent implements OnInit{
  projectForm!:FormGroup
  niveauOptions = ['PREMIERE', 'DEUXIEME', 'TROIXIEME', 'QUATRIEME', 'CINQUEME'];
  categoryList : CategoryProjectsDto[] = [];

  constructor(
    private apiService : ProjectsService,
    private categoryService : CategoryService,
    private router: Router,
    private theUser :UserService
  ) {
  }


  ngOnInit(): void {

    let user = {body: this.theUser.getUserData()}
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
      winner: new FormControl(false)
    })
    if(user.body!=null && this.theUser.getUserData())
    {
      console.log(user.body)
    }
  }

  project!:ProjectsDto
  onSubmit() {

    //this.project.userId=this.useridvar
    this.project=this.projectForm.value
      this.apiService.addProject({
        body : this.project
      })
        .subscribe({
         next : async() => console.log(this.project)
      });
    console.log(this.project);
  }
}
