import {Component, OnInit} from '@angular/core';
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {SuiviComponent} from "../../modals/suivi/suivi.component";
import {DevisComponent} from "../../modals/devis/devis.component";
import {PayerComponent} from "../../modals/payer/payer.component";

@Component({
    selector: 'app-documents',
    templateUrl: './documents.page.html',
    styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

    showLocationDetail = false;

    constructor(public modalController: ModalController,private routerOutlet: IonRouterOutlet) {
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

    // async presentModal() {
    //     const modal = await this.modalController.create({
    //         component: SuiviPageModule,
    //         // cssClass: 'my-custom-class'
    //     });
    //     return await modal.present();
    // }


    async devisModal() {
        const modal = await this.modalController.create({
            component: DevisComponent,
            cssClass: 'cal-modal',
            swipeToClose: true,
            presentingElement: this.routerOutlet.nativeEl,
            // presentingElement: await this.modalController.getTop() // Get the top-most ion-modal

        });
        return await modal.present();
    }

    async suivisModal(){
        const modal = await this.modalController.create({
            component: SuiviComponent,
            cssClass: 'cal-modal',
            swipeToClose: true,
            presentingElement: this.routerOutlet.nativeEl,
        });
        return await modal.present();
    }

    async payerModal(){
        const modal = await this.modalController.create({
            component: PayerComponent,
            cssClass: 'cal-modal',
            swipeToClose: true,
            presentingElement: this.routerOutlet.nativeEl,
        });
        return await modal.present();
    }

    visuModal(){

    }

}
