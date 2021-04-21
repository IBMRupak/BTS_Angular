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

  update() {
    const promise = this.bugService.updateBug(this.Bug, this.Bug.id);
    promise.subscribe((response: any) => {
      console.log(response);
      alert('Bug is Updated')

    },
      error => {
        console.log(error);
        alert('Error Occured')

      })
  }

  ngOnInit(): void {
  }

}
