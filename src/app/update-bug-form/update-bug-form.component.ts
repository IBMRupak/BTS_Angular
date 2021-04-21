import { Component, OnInit } from '@angular/core';
import { bug } from '../bug';
import { BugService } from '../bug.service';
@Component({
  selector: 'app-update-bug-form',
  templateUrl: './update-bug-form.component.html',
  styleUrls: ['./update-bug-form.component.css']
})
export class UpdateBugFormComponent implements OnInit {
  title:String = 'UpdateBugForm';
  Bug:bug = new bug();
  bugArray: any;
  constructor(private bugService: BugService) { }

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
        alert("error occured");
      })
  }

  ngOnInit(): void {
  }

}
