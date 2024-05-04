import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-contest',
  templateUrl: './show-contest.component.html',
  styleUrls: ['./show-contest.component.css']
})
export class ShowContestComponent implements OnInit{
  ngOnInit(): void {
    console.log("hello from showContestComponent")
  }

}
