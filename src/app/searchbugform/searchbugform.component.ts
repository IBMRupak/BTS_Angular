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
  bugList:any;

  constructor(private bugService:BugService) { }

  deleteBug(id : any , index : number){
  if(confirm("Are u sure you want to delete this ?")){

    const observable = this.bugService.delete(id);
    observable.subscribe(response=>this.bugArray.splice(index,1))
     alert("Bug is deleted");
  }
  else{
    alert("Your request was Cancelled");
  }

  }

  searchBugbyName(name:any){
    console.log(this.Bug.name);
    const observable = this.bugService.searchBugbyName(this.Bug.name);
    observable.subscribe(response=>{
      console.log(response);
        this.bugArray=response;
      //   console.log("success");
      // },
      // error=>{
      //   console.log(error);
      //   alert("error occured");
      if(this.bugArray[0]==undefined){
        return alert('No Bug Found!!!')
      }
      else{
        return alert ('Bug Found')
      }
      })
  }

  searchBugbyStatus(status:any){
    console.log(this.Bug.status);
    const observable = this.bugService.searchBugbyStatus(status);
    observable.subscribe(response=>{
      console.log(response);
        this.bugArray= response;
      //   alert("success");
      // },
      // error=>{
      //   console.log(error);
      //   alert("error occured");
      if(this.bugArray[0]==undefined){
        return alert('No Bug found!!!');
      }
      else{
        return alert ('Bug Found')
      }
       })

  }

  searchBugByNameAndStatus()
  {
    let status = (<HTMLInputElement>document.getElementById('status')).value;
    let name = (<HTMLInputElement>document.getElementById('name')).value;


    const observable = this.bugService.getBugByStatusAndName(name,status);
    observable.subscribe(response =>{
      console.log(response);
      this.bugList=response;
      if(this.bugList !=0){
       this.bugArray=this.bugList;
      }
      else{
      alert("No bug with name:  "+name + " and status: "+status+ " found");
      }

    },
    error=>{
      alert("Error Occured")
    }

      )
    }


  ngOnInit(): void {

    const observable = this.bugService.getAllBugs();
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;
    });


  }
}


