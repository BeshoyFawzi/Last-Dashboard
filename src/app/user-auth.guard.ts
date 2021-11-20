import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SystemLogService } from './services/system-log.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private SystemLogService :SystemLogService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if(this.SystemLogService.isLogged()){
        if(localStorage.getItem('usrToken'))
      {
        return true;
       
      
        
      }
      else{
        this.router.navigate(['/LogIn']);
        return false;
      }
  }
  
}
