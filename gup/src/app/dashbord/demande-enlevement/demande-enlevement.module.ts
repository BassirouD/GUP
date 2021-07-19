import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeEnlevementPageRoutingModule } from './demande-enlevement-routing.module';

import { DemandeEnlevementPage } from './demande-enlevement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeEnlevementPageRoutingModule
  ],
  declarations: [DemandeEnlevementPage]
})
export class DemandeEnlevementPageModule {}
