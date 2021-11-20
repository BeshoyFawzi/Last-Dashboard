import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  

})
export class UsersComponent implements OnInit {

  users:User[]=[]
  
  constructor(private _userservice:UserService) {
   

  }

  ngOnInit(): void {
    this._userservice.getAllUsers().subscribe(userlist=>{
      console.log(userlist)
      this.users=userlist
    })
   
  }


}
