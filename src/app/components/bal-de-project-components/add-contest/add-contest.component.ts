import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Option} from "../../../services/radhouene/models/option";
import {Projects} from "../../../services/radhouene/models/projects";
import {CategoryProjectsDto} from "../../../services/radhouene/models/category-projects-dto";
import {ProjectsService} from "../../../services/radhouene/services/projects.service";
import {CategoryService} from "../../../services/radhouene/services/category.service";
import {Router} from "@angular/router";
import {HelperService} from "../../../services/helper/helper.service";
import {UserService} from "../../../services/REST/User/user.service";
import {ProjectsDto} from "../../../services/radhouene/models/projects-dto";
import {Contest} from "../../../services/radhouene/models/contest";
import {OptionsService} from "../../../services/radhouene/services/options.service";
import {ContestBalDeProjetService} from "../../../services/radhouene/services/contest-bal-de-projet.service";
import {ContestDto} from "../../../services/radhouene/models/contest-dto";
import {OptionDto} from "../../../services/radhouene/models/option-dto";

@Component({
  selector: 'app-add-contest',
  templateUrl: './add-contest.component.html',
  styleUrls: ['./add-contest.component.scss']
})
export class AddContestComponent implements OnInit{

  niveauOptions = ['PREMIERE', 'DEUXIEME', 'TROIXIEME', 'QUATRIEME', 'CINQUEME'];
  optionSpecialityList : Option[]=[]
  contestToSave !:ContestDto;


  contestForm!:FormGroup
  constructor(
    private projectsService : ProjectsService,
    private optionService : OptionsService,
    private theUserService: UserService,
    private contestService : ContestBalDeProjetService
  ) {
  }
  fillOptionList(){
    this.optionService.getAllOptions1().subscribe({
      next :
        (data)=> {
        this.optionSpecialityList=data;
          console.log(this.optionSpecialityList);

        }
    })
  }



   id !: number;

  ngOnInit(): void {
    this.fillOptionList()
    this.contestForm = new FormGroup({
      deadline: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      image: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      niveau: new FormControl('',[Validators.required]),
      option: new FormControl('',[Validators.required])

    })

  }




   createContest()  {
    this.id=this.contestForm.get('option')?.value // getting the option id from the form
    this.contestToSave=this.contestForm.value;// affecting the form to the contest variable
    this.contestToSave.option={}
    console.log(" outside the promise ", this.contestToSave.option); // loging the contest variable
    //saving the contest , the customSaveContest takes 2 variables , the body of the contest to save and the option id
    this.contestService.customSaveContest({ optionId:this.id, body : this.contestToSave}).subscribe({
      next :
        async() =>{

          console.log("inside the promise of custom save ! ",this.contestToSave.option)
        },
      error:(response)=>{
        console.log(response)
      }
    })

  }
}
