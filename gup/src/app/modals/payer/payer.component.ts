import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Payer2Component} from "../payer2/payer2.component";

@Component({
    selector: 'app-payer',
    templateUrl: './payer.component.html',
    styleUrls: ['./payer.component.scss'],
})
export class PayerComponent implements OnInit {

    constructor(public modalController: ModalController) {
    }

    ngOnInit() {
    }

    async openPaye2(){
        const modal = await this.modalController.create({
            component: Payer2Component,
            cssClass: 'cal-modal',
            swipeToClose: true,
        });
        return await modal.present();
    }

}
