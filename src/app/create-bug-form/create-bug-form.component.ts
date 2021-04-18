import { Component, OnInit } from '@angular/core';
import { bug } from "../bug";
import { BugService} from "../bug.service";

@Component({
  selector: 'app-create-bug-form',
  templateUrl: './create-bug-form.component.html',
  styleUrls: ['./create-bug-form.component.css']
})
export class CreateBugFormComponent implements OnInit {
title:string = 'Create Bug Form';
Bug:bug = new bug();
bugArray:bug[]=[];

  constructor(private BugService:BugService) { }

  save(){
    this.bugArray.push(Object.assign({}, this.Bug));
    console.log(this.Bug.name);
    console.log(this.Bug.projectId);
    console.log(this.Bug.module);
    console.log(this.Bug.buildversion);
    console.log(this.Bug.product);
    console.log(this.Bug.submittedOn);
    console.log(this.Bug.eta);

    const promise = this.BugService.save(this.Bug);
    promise.subscribe(response=>{
      console.log(response);
      alert("Bug is Added");
      this.bugArray.push(Object.assign({},this.Bug));
    },
    error=>{
      console.log(error);
      alert("Error Occured")
    })

  }
  ngOnInit(): void {
  }

}
