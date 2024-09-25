import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./gaurds";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'shared',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./shared/shared.module').then( m => m.SharedPageModule)
  },
  {
    path: 'wallet',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'profile',
    canActivateChild: [AuthGuard],
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
