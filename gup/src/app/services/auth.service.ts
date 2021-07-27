import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    username;
    roles: Array<String>;
    hostgup = environment.api;
    jwt;

    constructor(private http: HttpClient) { }

    // login(data){
    //     if((data.login==="user")&&(data.motdepasse==="passer123")){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    login(data): Observable<any>{
        return this.http.post(this.hostgup + 'auth', data);
    }

    saveToken(jwt){
        localStorage.setItem('token', jwt);
        this.jwt = jwt;
        this.parseJWT();
    }

    parseJWT(){
        let jwtHelper = new JwtHelperService();
        let objJWT = jwtHelper.decodeToken(this.jwt);
        this.username = objJWT.obj;
        this.roles = objJWT.roles;
    }

    loadToken(){
        this.jwt = localStorage.getItem('token');
        this.parseJWT();
    }

    logOut(){
        localStorage.removeItem('token');
        this.initParams();
    }

    initParams(){
        this.jwt = undefined;
        this.username = undefined;
        this.roles = undefined;
    }
}
