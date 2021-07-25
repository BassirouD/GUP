import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Highcharts} from "highcharts/modules/map";
// import {Chart} from "highcharts";
import {Chart} from "angular-highcharts";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    showLocationDetail = false;
    status: string = 'atraiter';
    chartOptions: any;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.getGraph();
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

    onATraiter() {
        this.status = 'atraiter'
    }

    onTraiter() {
        this.status = 'traiter'
    }

    onRejeter() {
        this.status = 'arejeter'
    }

    openDemande() {
        this.router.navigate(['/demande-enlevement'])
    }

    getGraph() {

        this.chartOptions = new Chart({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Test diagramme',
            },
            colors: [
                '#808080',
                '#008000',
                '#f00020',
            ],
            xAxis: {
                categories: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Volume test'
                }
            },

            series: [{
                name: 'A traiter',
                type: undefined,
                data: [5, 3, 4, 7, 2],
            }, {
                name: 'Validées',
                type: undefined,
                data: [3, 4, 4, 2, 5],
            },
               {
                name: 'Rejetées',
                type: undefined,
                data: [2, 5, 6, 2, 1],
            },]

        });
    }

}
