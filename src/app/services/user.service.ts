import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User} from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class UserService {
   users:User[]=[]
constructor( private httpClient:HttpClient){


}

    
  
     getAllUsers():Observable<User[]>{
     
      return this.httpClient.get<User[]>(environment.APIURL+'/users');
      console.log(environment.APIURL);
    }
  
}

