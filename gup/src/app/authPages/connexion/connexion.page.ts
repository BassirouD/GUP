import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlertController, LoadingController, NavController, ToastController} from "@ionic/angular";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.page.html',
    styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

    loginForm = this.formbuilder.group({
        username:['pape',Validators.required],
        password:['Gainde2000!',Validators.required]
    })
    login: FormGroup;
    user;
    hide = true;
    loadData={login:'user',motdepasse:'passer123'}
    constructor(private formbuilder: FormBuilder,
                public loadingController:LoadingController,
                public router:Router,
                private toastController: ToastController,public auths:AuthService,
                private alertCtrl: AlertController,public nav:NavController,
                private authService: AuthService
    ) {
    }

    ngOnInit() {
    }

    // loginForm = this.formbuilder.group({
    //     username: ['', Validators.required],
    //     password: ['', Validators.required]
    // });

    onLogin() {
        this.router.navigate(["/tabs/home"]);
    }

    onInscription() {
        this.router.navigate(["/inscription"]);
    }

    async Login(){

        this.authService.login(this.loginForm.value)
            .subscribe(data=>{
                if(data.statut){
                    this.user=data.data;
                    //alert("connexion réussie !!!")
                    localStorage.setItem('id',JSON.stringify(this.user.id));
                    localStorage.setItem('user',JSON.stringify(this.user));
                    localStorage.setItem('token',this.user.token);
                    localStorage.setItem('prenom',this.user.username);
                    localStorage.setItem('nom',this.user.nom);
                    localStorage.setItem('username',this.user.username);
                    this.router.navigate(["/tabs/home"])
                }else{
                    alert("connexion no réussie !!!")
                }
            },err=>{
                console.log(err);
            })

        // this.router.navigate(['/tabs/home']);



        // const loading = await this.loadingController.create({
        //     message:"Please wait !!!",
        //     duration:3000
        // });
        // await loading.present()
        // //console.log(this.loadData);
        // const credential= this.auths.login(this.loadData);
        // if(credential){
        //     loading.dismiss();
        //     this.presentAlert("Connexion réussie !!");
        //     localStorage.setItem('loggedIn','true');
        //     this.router.navigate(['/tabs/home']);
        // }else{
        //     loading.dismiss();
        //     this.presentToast('enable to loggin');
        // }
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
