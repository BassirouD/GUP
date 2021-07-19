import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    showLocationDetail = false;
    status: string = 'atraiter'

    constructor() {
    }

    ngOnInit() {
    }

    catSlideOpts = {
        slidesPerView: 2.1,
        spaceBetween: 0,
        slidesOffsetBefore: 0,
        freeMode: true,
        loop: false,
        centeredSlides: false,
    };


    onScroll(ev) {
        const offset = ev.detail.scrollTop;
        this.showLocationDetail = offset > 40;
    }

    doRefresh(event) {
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }

    onATraiter(){
        this.status = 'atraiter'
    }

    onTraiter(){
        this.status = 'traiter'
    }

    onRejeter(){
        this.status = 'arejeter'
    }


}
