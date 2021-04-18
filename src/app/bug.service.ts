import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bug } from './bug'

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }
  save(Bug: bug) {
    return this.http.post('http://localhost:8081/bug', Bug, {
      headers: {
        "content-type": 'application/json'
      }
    })
  }
}
