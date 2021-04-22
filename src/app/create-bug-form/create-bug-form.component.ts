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
bugArray: any;

  constructor(private BugService:BugService) { }




  save(){
     const observable = this.BugService.save(this.Bug);
    observable.subscribe(response=>{
      console.log(response);
      this.Bug.id=response;

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
