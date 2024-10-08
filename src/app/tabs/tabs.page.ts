import { AfterViewInit, Component } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements AfterViewInit {

  constructor(private loaderService:LoaderService) {}

  ngAfterViewInit(): void {
    console.log('asdfasdf main')
    this.loaderService.hideLoading();
  }

}
