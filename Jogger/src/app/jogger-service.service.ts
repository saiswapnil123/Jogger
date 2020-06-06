import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JoggerServiceService {

  constructor(private http: HttpClient) {

   }

   Insert(Jogger){
     console.log(Jogger.Date);
     return this.http.post('http://localhost:3000/insert',Jogger);
   }

   Select(){
     return this.http.get('http://localhost:3000/select');
   }
}
