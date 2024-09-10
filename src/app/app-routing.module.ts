import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then( m => m.SharedPageModule)
  },  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }

  // {
  //   path: 'contact',
  //   loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  // },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
