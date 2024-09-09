import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import { ReplacementFormComponent } from './replacement-form/replacement-form.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page,WorkerProfileComponent, ReplacementFormComponent],
  exports: [WorkerProfileComponent, ReplacementFormComponent]
})
export class Tab2PageModule {}
