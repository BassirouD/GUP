import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./authPages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./authPages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./authPages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'demande-enlevement',
    loadChildren: () => import('./dashbord/demande-enlevement/demande-enlevement.module').then( m => m.DemandeEnlevementPageModule)
  },  {
    path: 'change-profil',
    loadChildren: () => import('./authPages/change-profil/change-profil.module').then( m => m.ChangeProfilPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
