import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DemandeEnlevementPageRoutingModule} from './demande-enlevement-routing.module';

import {DemandeEnlevementPage} from './demande-enlevement.page';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DemandeEnlevementPageRoutingModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule

    ],
    declarations: [DemandeEnlevementPage]
})
export class DemandeEnlevementPageModule {
}
