import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ShortListComponent } from './short-list/short-list.component';
import { ViewWorkerComponent } from './view-worker/view-worker.component';
import { WorkerContractComponent } from './worker-contract/worker-contract.component';
import { TrackingListComponent } from './tracking-list/tracking-list.component';
import { WorkerStatusComponent } from './worker-status/worker-status.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'your-shortlist',
    component: ShortListComponent
  },
  {
    path: 'view-worker',
    component: ViewWorkerComponent
  },
  {
    path: 'worker-contract',
    component: WorkerContractComponent
  },
  {
    path: 'tracking-list',
    component: TrackingListComponent
  },
  {
    path: 'worker-status',
    component: WorkerStatusComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
