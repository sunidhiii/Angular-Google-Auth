import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
declare var gapi : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  googleUser = {};
  auth2:any;

  constructor(private authService: SocialAuthService,private router: Router) { }

 /* signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

  } */

  ngOnInit() {
   /* this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

    });*/
    (window as any).googleLogin = this.onSignIn
  }


  onSignIn(googleUser) {

    gapi.load('auth2', () => {

      this.auth2 = gapi.auth2.init({
         client_id: 'x237799519346-isv7phoj0a7nl2tdqoq2h8ve4nehj5bq.apps.googleusercontent.com',
         scope: 'https://www.googleapis.com/auth/userinfo.email'
      });
    });
  }

SignIn()
{
  this.router.navigate(['/home']);
}

}

