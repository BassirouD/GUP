import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {InscriptionPageRoutingModule} from './inscription-routing.module';

import {InscriptionPage} from './inscription.page';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InscriptionPageRoutingModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
    declarations: [InscriptionPage]
})
export class InscriptionPageModule {
}
