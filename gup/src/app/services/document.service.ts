import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
// import {Document} from "../models/document.model";

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    // host = environment.host;


    documents = [
        {
            "id": 1,
            "nom": "Diop",
            "prenom": "Mamadou",
            "numero": 100,
            "status": 1
        },
        {
            "id": 2,
            "nom": "Kante",
            "prenom": "Alpha",
            "numero": 120,
            "status": 2
        },
        {
            "id": 3,
            "nom": "Camara",
            "prenom": "Assi",
            "numero": 140,
            "status": 3
        },
        {
            "id": 4,
            "nom": "Diallo",
            "prenom": "Bassirou",
            "numero": 160,
            "status": 4
        },
        {
            "nom": "Balde",
            "prenom": "Satina",
            "numero": 800,
            "status": 5,
            "id": 5
        }
    ]


    hostgup = environment.api
    constructor(private http: HttpClient) {
    }

    // getAllDocuments(): Observable<Document[]> {
    //     return this.http.get<Document[]>(this.host + 'documents');
    // }

    getListDocument(){
        let donner
        for (let document of this.documents){
            donner = document
        }
        return donner
    }

    getOwnerDocument(owner): any{
        return this.http.get(this.hostgup + 'creationdossier/list/' +owner);
    }

    getTotalDemandeCreate(id: number){
        return this.http.get(this.hostgup + 'creationdossier/totaldemandecreatepartransitaire/' + id);
    }
}
