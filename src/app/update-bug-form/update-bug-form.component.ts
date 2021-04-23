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
  //get bug details to be prepopulated
  searchBugbyName(name: any) {
    let URL = 'http://localhost:8084/bug/';
    let bugname = (<HTMLInputElement>document.getElementById('bugname')).value;
    if (bugname) {
      URL = URL + 'name/' + bugname;
      const observable = this.bugService.searchBugbyName(bugname);
      observable.subscribe(response => {
        this.bugArray = response;
        console.log("success");
        if (this.bugArray) {
          this.Bug = this.bugArray;
        }
        else {
          alert("Enter a valid bug name");
        }
      },
        error => {
          console.log(error);
          alert("error");
        })
    }
    else {
      alert("Please enter bug name")
    }
  }

  update() {
    const promise = this.bugService.updateBug(this.Bug, this.Bug.id);
    promise.subscribe((response: any) => {
      console.log(response);
      this.bugArray=[response];

      alert('Bug is Updated')

    },
      error => {
        console.log(error);
        alert('Error Occured')
      //  if(this.bugArray[0]==undefined){
      //    return alert("Update not possible")
      //  }
      //  else{
      //    return alert('Update is found');
      //  }
      })
  }

  ngOnInit(): void {
  }

}
