import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Highcharts} from "highcharts/modules/map";
import {Chart} from "angular-highcharts";
import {DocumentService} from "../../services/document.service";
import {DevisComponent} from "../../modals/devis/devis.component";
import {SuiviComponent} from "../../modals/suivi/suivi.component";
import {PayerComponent} from "../../modals/payer/payer.component";
import {IonRouterOutlet, ModalController, NavController} from "@ionic/angular";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    showLocationDetail = false;
    status: string = 'atraiter';
    chartOptions: any;
    chartOptionsCercle: any;

    constructor(private router: Router, private docSrv: DocumentService,
                public modalController: ModalController,
                private routerOutlet: IonRouterOutlet,
                private documentSrv: DocumentService,
                private nav: NavController
                ) {
    }

    ngOnInit() {
        this.getGraph();
        this.onGetAllDemandeEncours();
        this.onGetOwnerDocument();
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
            this.getGraph();
        }, 1000);
    }

    onATraiter() {
        this.status = 'atraiter'
    }

    onTraiter() {
        this.status = 'traiter'
    }

    onRejeter() {
        this.status = 'arejeter'
        this.getGraph();
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
                text: 'Nombre de dossiers créés en cours',
            },
            colors: [
                '#F1F1F1',
                '#C2FFAA',
                '#FF9191',
            ],
            xAxis: {
                categories: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
            },

            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'percent'
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

    getGraphCercle() {

        this.chartOptionsCercle = new Chart({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Nombre de dossiers créés en cours',
            },
            colors: [
                '#F1F1F1',
                '#C2FFAA',
                '#FF9191',
            ],
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },

            series: [
                {
                colorByPoint: true,
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

    aTraiter
    onGetAllDemandeEncours(){
        this.docSrv.getTotalDemandeCreate(43).subscribe(data =>{
            this.aTraiter = data['data'];
            console.log('****' + JSON.stringify(data['data']));
        })
    }

    documents
    onGetOwnerDocument(){
        let owner = 43
        // localStorage.getItem('id');
        this.docSrv.getOwnerDocument(owner).subscribe(data =>{
            this.documents = data['data'];
        })
    }

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


}
