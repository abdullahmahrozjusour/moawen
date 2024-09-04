import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { SubmitApplicationComponent } from './submit-application/submit-application.component';
import { SuccessComponent } from './success/success.component';
import { BrowsLocalComponent } from './brows-local/brows-local.component';
 
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
  ],
  exports: [SubmitApplicationComponent, SuccessComponent, BrowsLocalComponent, BrowsLocalComponent ],
  declarations: [Tab3Page, SubmitApplicationComponent, SuccessComponent, BrowsLocalComponent, BrowsLocalComponent ]
})
export class Tab3PageModule { }
