import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeEnlevementPage } from './demande-enlevement.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeEnlevementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeEnlevementPageRoutingModule {}
