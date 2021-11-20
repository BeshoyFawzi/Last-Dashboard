import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserAthService } from 'src/app/services/authService/user-ath.service';
import { SystemLogService } from '../../services/system-log.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  email: string=""
  password:string=""
  constructor(private SystemLogService :SystemLogService , private router: Router,private userAthus:UserAthService) { }

  ngOnInit(): void {
  }
  login()
  {
    //this.SystemLogService.login(this.email , this.password);
    //this.router.navigate(['/dash/home'])
    const  User=
    {
      Email:this.email,
      Password:this.password

    }

    console.log(typeof this.email)
    console.log(  typeof this.password)
       console.log(JSON.stringify( User))
    this.userAthus.Login(User as User)
    //this.router(['/dash/home'])
  }
}
