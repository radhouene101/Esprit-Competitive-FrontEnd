import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FirstAPIService} from "../../services/REST/first-api.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:FirstAPIService
  ) {
  }
  param:any;
  queryParam:any;
  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.param=this.activatedRoute.snapshot.params['username'];//Path Param
    this.queryParam=this.activatedRoute.snapshot.queryParams['username'];

    this.productService.getAllProductsWithLimit(10)
      .subscribe({
        next:(data)=>{
          console.log(data);
        }
      })
  }

}
