import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireDatabase } from 'angularfire2/database';

import { Form } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactoComponent implements OnInit {

  form = { "correo": "" };
  //forms: FirebaseListObservable<Form>;
  ref = firebase.database().ref('forms/');


  constructor(private http: HttpClient,
    private router: Router,
    private cookieService: CookieService) {

  }
  //constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {

  //}

  ngOnInit() {
  }

  saveForm() {

    this.cookieService.set('emailUser', this.form.correo);
    
    let newData = this.ref.push();
    newData.set(this.form);
  }
}