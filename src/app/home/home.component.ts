import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
//import { NgxImgZoomService  } from 'ngx-img-zoom';


declare var gapi:any;
declare var auth2:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auth2:any;
  constructor(private router: Router,){}

  ngOnInit(): void {
  }
  public imagePath;
  imgURL: any;
  public message: string;

  enableZoom: Boolean = true;
  //previewImageSrc: any;
  //zoomImageSrc: any;
  myThumbnail:any;
  myFullresImage:any;


  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      //this.imgURL = reader.result;
      this.myThumbnail = reader.result;
      this.myFullresImage = reader.result;
    };
  }
  signOut() {
    this.router.navigate(['/login']);
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }


}
