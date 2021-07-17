import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(private formbuilder: FormBuilder,
              private router: Router,) { }

  ngOnInit() {
  }

    loginForm = this.formbuilder.group({
        username:['',Validators.required],
        password:['',Validators.required]
    });

    onLogin(){
        this.router.navigate(["/tabs/home"]);
    }

}
