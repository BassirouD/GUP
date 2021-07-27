import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Payer2Component} from "../payer2/payer2.component";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
    selector: 'app-payer',
    templateUrl: './payer.component.html',
    styleUrls: ['./payer.component.scss'],
})
export class PayerComponent implements OnInit {

    docId: number;
    @Input() document: any;

    constructor(public modalController: ModalController,
                private activatedRoute: ActivatedRoute,
                private formBuilder: FormBuilder,
                private router: Router,
                ) {
        this.docId = activatedRoute.snapshot.params.id;
    }

    ngOnInit() {
        // console.log(JSON.stringify(document))
    }

    async openPaye2(){
        // alert(this.docId)
        const modal = await this.modalController.create({
            component: Payer2Component,
            cssClass: 'cal-modal',
            swipeToClose: true,
        });
        return await modal.present();
    }

}
