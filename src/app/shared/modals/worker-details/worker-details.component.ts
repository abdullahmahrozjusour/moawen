import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.scss'],
})
export class WorkerDetailsComponent  implements OnInit {
  @Input() worker: any;
  constructor(private modalCtrl: ModalController) { }
  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit() {
    console.log(this.worker, "modal workser")
  }

}
