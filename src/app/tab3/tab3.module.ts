import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { SubmitApplicationComponent } from './submit-application/submit-application.component';
import { SuccessComponent } from './success/success.component';
import { BrowsLocalComponent } from './brows-local/brows-local.component';
import { BrowsSearchComponent } from './brows-search/brows-search.component';
 
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [SubmitApplicationComponent, SuccessComponent, BrowsLocalComponent, BrowsLocalComponent,BrowsSearchComponent ],
  declarations: [Tab3Page, SubmitApplicationComponent, SuccessComponent, BrowsLocalComponent, BrowsLocalComponent, BrowsSearchComponent ]
})
export class Tab3PageModule { }
