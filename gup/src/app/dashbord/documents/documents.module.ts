import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DocumentsPageRoutingModule} from './documents-routing.module';

import {DocumentsPage} from './documents.page';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DocumentsPageRoutingModule,
        MatMenuModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
    ],
    declarations: [DocumentsPage],
})
export class DocumentsPageModule {
}
