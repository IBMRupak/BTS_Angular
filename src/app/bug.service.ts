import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bug } from './Bug';


const URL = 'http://localhost:8084/bug';
@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }
  save(bug: bug) {
    return this.http.post(URL, bug, {
      headers: {
        "content-type": 'application/json'
      },
      responseType: "text"
    });
  }

  getAllBugs() {
    return this.http.get(URL);
  }

  searchBugbyName(name:any) {
      return this.http.get(URL+'/name/'+ name, {
        headers: {
          "content-type": 'application/json',
          reponseType: 'text'
        }
        });
  }

  searchBugbyStatus(status:any) {
    return this.http.get(URL+'/status/'+ status, {
      headers: {
        "content-type": 'application/json',
        reponseType: 'text'
      }
      });
    }


    updateBug(bug : bug, id :string){
      return this.http.put(URL+'/'+id, bug,{
        headers:{"content-type": 'application/json'}
      })
    }
  }



