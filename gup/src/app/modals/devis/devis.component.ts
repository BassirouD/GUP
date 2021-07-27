import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-devis',
    templateUrl: './devis.component.html',
    styleUrls: ['./devis.component.scss'],
})
export class DevisComponent implements OnInit {

    @Input() document: any;

    constructor() {
    }

    ngOnInit() {
    }

}
