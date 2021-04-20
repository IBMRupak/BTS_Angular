import { Component, OnInit } from '@angular/core';
import { bug } from '../bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-searchbugform',
  templateUrl: './searchbugform.component.html',
  styleUrls: ['./searchbugform.component.css']
})
export class SearchbugformComponent implements OnInit {
  title:String = 'Searchbugform';
Bug:bug = new bug();
bugArray: any;


  constructor(private bugService:BugService) { }

  searchBugbyName(name:any){
    console.log(this.Bug.name);
    const observable = this.bugService.searchBugbyName(this.Bug.name);
    observable.subscribe(response=>{
      console.log(response);
        this.bugArray=[response];
        console.log("success");
      },
      error=>{
        console.log(error);
        console.log("error");
      })
  }

  searchBugbyStatus(status:any){
    console.log(this.Bug.status);
    const observable = this.bugService.searchBugbyStatus(this.Bug.status);
    observable.subscribe(response=>{
      console.log(response);
        this.bugArray=[response];
        console.log("success");
      },
      error=>{
        console.log(error);
        console.log("error");
      })
  }

  ngOnInit(): void {

  }
  }
