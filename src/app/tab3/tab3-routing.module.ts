import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { SubmitApplicationComponent } from './submit-application/submit-application.component';
import { SuccessComponent } from './success/success.component';
import { BrowsLocalComponent } from './brows-local/brows-local.component';
import { ShortListComponent } from '../tab1/short-list/short-list.component';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'submit-application',
    component: SubmitApplicationComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  {
    path: 'brows-local',
    component: BrowsLocalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
