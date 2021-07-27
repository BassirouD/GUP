import {Component, OnInit} from '@angular/core';
import {IonRouterOutlet, ModalController, NavController} from "@ionic/angular";
import {SuiviComponent} from "../../modals/suivi/suivi.component";
import {DevisComponent} from "../../modals/devis/devis.component";
import {PayerComponent} from "../../modals/payer/payer.component";
import {DocumentService} from "../../services/document.service";

@Component({
    selector: 'app-documents',
    templateUrl: './documents.page.html',
    styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

    showLocationDetail = false;
    documents;


    constructor(public modalController: ModalController,
                private routerOutlet: IonRouterOutlet,
                private documentSrv: DocumentService,
                private nav: NavController
                ) {
    }

    ngOnInit() {
        this.onGetOwnerDocument();
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


    async devisModal(doc) {
        const modal = await this.modalController.create({
            component: DevisComponent,
            cssClass: 'cal-modal',
            swipeToClose: true,
            presentingElement: this.routerOutlet.nativeEl,
            componentProps: {
                'document': doc,
            }
            // presentingElement: await this.modalController.getTop() // Get the top-most ion-modal

        });
        return await modal.present();
    }

    async suivisModal(doc){
        const modal = await this.modalController.create({
            component: SuiviComponent,
            cssClass: 'cal-modal',
            swipeToClose: true,
            presentingElement: this.routerOutlet.nativeEl,
            componentProps: {
                'document': doc,
            }
        });
        return await modal.present();
    }

    // modelData: any;
    async payerModal(doc){
        // console.log(JSON.stringify(doc));
        const modal = await this.modalController.create({
            component: PayerComponent,
            cssClass: 'cal-modal',
            swipeToClose: true,
            presentingElement: this.routerOutlet.nativeEl,
            componentProps: {
                'document': doc,
            }
        });
        // console.log('im id' + id)

        // modal.onDidDismiss().then((this.data) =>{})
        return await modal.present();
    }

    visuModal(){

    }

    // idDoc
    onGetOwnerDocument(){
        let owner = 43
            // localStorage.getItem('id');
        this.documentSrv.getOwnerDocument(owner).subscribe(data =>{
            this.documents = data['data'];
            // this.idDoc =this.documents.id;
            // console.log('**********' + JSON.stringify(data['data'].status))
        })
    }




}
