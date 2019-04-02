import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.authenticationService.logout;
    this.router.navigate(['/home']);
  }

  isLoggedIn(){
    //this.authenticationService.isLoggedIn;
    return this.authenticationService.loggedIn;


  }

}
