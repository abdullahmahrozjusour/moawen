import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ShortListComponent } from './short-list/short-list.component';
import { ViewWorkerComponent } from './view-worker/view-worker.component';
import { WorkerContractComponent } from './worker-contract/worker-contract.component';
import { TrackingListComponent } from './tracking-list/tracking-list.component';
import { WorkerStatusComponent } from './worker-status/worker-status.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';
import { UserResolver } from './tab1.resolver';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    resolve: {
      userResolver: UserResolver
    }
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
  {
    path: 'complaints',
    component: ComplaintsComponent,
  },
  {
    path: 'form',
    component: ComplaintFormComponent
  },
  {
    path: 'complaints-list',
    component: ComplaintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserResolver]
})
export class Tab1PageRoutingModule {}
