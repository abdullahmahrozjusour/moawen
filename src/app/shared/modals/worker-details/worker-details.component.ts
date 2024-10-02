import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/http/global.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.scss'],
})
export class WorkerDetailsComponent  implements OnInit {
  @Input() worker: any;

  workerDetail: any;

  constructor(private modalCtrl: ModalController, private globalService: GlobalService,
    private toastService: ToastService, private loaderService: LoaderService
  ) { }
  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  getWorkerDetails() {
    this.loaderService.showLoading() 
    this.globalService.getWorkerDetails(this.worker.id).subscribe({
      next: (workers) => {
        this.workerDetail = workers.response;
        this.loaderService.hideLoading() 
      },
      error: (error) => {
        this.toastService.showToastByStatusCode('top', error.status, error.error.message);
        this.loaderService.hideLoading() 
      }
    });
  }

  ngOnInit() {
    this.getWorkerDetails()
  }

}
