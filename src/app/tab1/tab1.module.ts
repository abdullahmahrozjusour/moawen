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

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  exports: [ShortListComponent,ViewWorkerComponent, WorkerContractComponent],
  declarations: [Tab1Page,ShortListComponent, ViewWorkerComponent, WorkerContractComponent]
})
export class Tab1PageModule {}
