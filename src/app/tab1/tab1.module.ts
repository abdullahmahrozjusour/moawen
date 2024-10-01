import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ShortListComponent } from './short-list/short-list.component';
import { ViewWorkerComponent } from './view-worker/view-worker.component';
import { WorkerContractComponent } from './worker-contract/worker-contract.component';
import { SharedPageModule } from '../shared/shared.module';
import { TrackingListComponent } from './tracking-list/tracking-list.component';
import { WorkerStatusComponent } from './worker-status/worker-status.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';
import { CoreService } from '../services/http/core.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SharedPageModule,
    TranslateModule
  ],
  exports: [ShortListComponent,ViewWorkerComponent, WorkerContractComponent, TrackingListComponent, WorkerStatusComponent, ComplaintsComponent,ComplaintFormComponent, ComplaintListComponent],
  declarations: [Tab1Page,ShortListComponent, ViewWorkerComponent, WorkerContractComponent, TrackingListComponent, WorkerStatusComponent, ComplaintsComponent, ComplaintFormComponent, ComplaintListComponent],
  providers:[ CoreService ]
})
export class Tab1PageModule {}
