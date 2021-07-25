import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlertController, LoadingController, NavController, ToastController} from "@ionic/angular";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.page.html',
    styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

    hide = true;
    loadData={login:'user',motdepasse:'passer123'}
    constructor(private formbuilder: FormBuilder,
                public loadingController:LoadingController,
                public router:Router,
                private toastController: ToastController,public auths:AuthService,
                private alertCtrl: AlertController,public nav:NavController
    ) {
    }

    ngOnInit() {
    }

    loginForm = this.formbuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    onLogin() {
        this.router.navigate(["/tabs/home"]);
    }

    onInscription() {
        this.router.navigate(["/inscription"]);
    }

    async login(){
        const loading = await this.loadingController.create({
            message:"Please wait !!!",
            duration:3000
        });
        await loading.present()
        //console.log(this.loadData);
        const credential= this.auths.login(this.loadData);
        if(credential){
            loading.dismiss();
            this.presentAlert("Connexion réussie !!");
            localStorage.setItem('loggedIn','true');
            this.router.navigate(['/tabs/home']);
        }else{
            loading.dismiss();
            this.presentToast('enable to loggin');
        }
    }

    async presentAlert(mgs) {
        const alert = await this.alertCtrl.create({
            header: 'Alert',
            message: mgs,
            buttons: ['OK']
        });

        await alert.present();

    }

    async presentToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

}
