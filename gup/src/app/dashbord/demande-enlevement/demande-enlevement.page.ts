import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-demande-enlevement',
    templateUrl: './demande-enlevement.page.html',
    styleUrls: ['./demande-enlevement.page.scss'],
})
export class DemandeEnlevementPage implements OnInit {

    progress = 0;
    n = 1;

    constructor() {
    }

    ngOnInit() {
    }

    onSuivant(){
        if (this.n < 8){
            this.n += 1;
        }
    }

    onPrecedent(){
        this.n -= 1;
    }

}
