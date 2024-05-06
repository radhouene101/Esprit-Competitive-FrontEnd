import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../services/radhouene/services/category.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryProjectsDto} from "../../../services/radhouene/models/category-projects-dto";
import {SousCategory} from "../../../services/radhouene/models/sous-category";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{
  constructor(
    private categoryService: CategoryService
  ) {}
  cat!:CategoryProjectsDto
  addCategory(cat:CategoryProjectsDto){
    this.cat=this.categoryForm.value
    this.categoryService.addCategory({body:cat}).subscribe({
      next :(data)=>{
        console.log(data);
      }
    })
  }


  categoryForm!:FormGroup
  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      description: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
    })

  }

}
