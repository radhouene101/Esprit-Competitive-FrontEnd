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
import {HelperService} from "../../../services/helper/helper.service";
import {User} from "../../../services/User/models/user";
import {Observable} from "rxjs";



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
  user:User = {}
  constructor(
    private apiService : ProjectsService,
    private categoryService : CategoryService,
    private router: Router,
    private jwtHelper:HelperService,
    private theUserService: UserService
  ) {
  }
  displayData() {
    let res = this.theUserService.getUserData();
    res.subscribe({
      next: (response) => {
        this.user = <User>response;
        console.log(this.user.id);
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
  ngOnInit(): void {


    this.displayData()
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





  }

  project!:ProjectsDto
  onSubmit() {
    this.project=this.projectForm.value
    this.project.userId=this.user.id
    this.apiService.addProject({
        body : this.project
      })
        .subscribe({
         next : async() => console.log(this.project)
      });

  }
}
