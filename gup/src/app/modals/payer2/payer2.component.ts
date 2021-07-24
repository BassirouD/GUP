import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Payer3Component} from "../payer3/payer3.component";

@Component({
    selector: 'app-payer2',
    templateUrl: './payer2.component.html',
    styleUrls: ['./payer2.component.scss'],
})
export class Payer2Component implements OnInit {

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
    }

    async openPayer3() {
        const modal = await this.modalController.create({
            component: Payer3Component,
            cssClass: 'cal-modal',
            swipeToClose: true,
        });
        return await modal.present();
    }

}
