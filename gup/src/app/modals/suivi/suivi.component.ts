import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-suivi',
    templateUrl: './suivi.component.html',
    styleUrls: ['./suivi.component.scss'],
})
export class SuiviComponent implements OnInit {

    @Input() document: any;

    constructor() {
    }

    ngOnInit() {
    }

}
