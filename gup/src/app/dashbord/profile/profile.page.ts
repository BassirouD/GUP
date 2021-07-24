import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    showLocationDetail = false;

    constructor(private router:Router) {
    }

    ngOnInit() {
    }

    onScroll(ev) {
        const offset = ev.detail.scrollTop;
        this.showLocationDetail = offset > 40;
    }

    doRefresh(event) {
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }

    logOut(){
        localStorage.removeItem('annee');
        localStorage.removeItem('periode');
        this.router.navigateByUrl('/');
    }

    goToChangePassword(){
        this.router.navigateByUrl('/change-password');
    }

    goToChangeProfil(){
        this.router.navigateByUrl('/change-profil');
    }

}
