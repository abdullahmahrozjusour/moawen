import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { GlobalService } from 'src/app/services/http/global.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { WorkerDetailsComponent } from 'src/app/shared/modals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brows-local',
  templateUrl: './brows-local.component.html',
  styleUrls: ['./brows-local.component.scss'],
})
export class BrowsLocalComponent implements OnInit {
  searchForm!: FormGroup;
  nationalities: any = [];
  workers: any
  dob: string = '';
  searchQuery: any;


  constructor(private navCtrl: NavController, private globalService: GlobalService,
    private toastService: ToastService, private loaderService: LoaderService, private fb: FormBuilder,
    private modalController: ModalController,private router: Router,

  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.searchQuery = navigation.extras.state['query'];
      this.fetchAllWorkers(this.searchQuery);
      console.log(this.searchQuery,'zaid')
    }
  }


  navigateToViewWorker() {
    this.navCtrl.navigateRoot('dashboard/view-worker');
  }



  navigateToWorkerContract() {
    this.navCtrl.navigateRoot('dashboard/worker-contract');
  }


  fetchAllWorkers(query: any) {
    this.loaderService.showLoading();
    this.globalService.searchWorkers(query).subscribe({
      next: (workers) => {
        console.log('Workers found:', workers.response);
        this.workers = workers.response;
        this.isModalOpen = false;
        this.loaderService.hideLoading();
      },
      error: (error) => {
        this.toastService.showToastByStatusCode('top', error.status, error.error.message);
        this.loaderService.hideLoading();
      },
    });
  }


  fethNationalities(){
    this.globalService.fetchAllNationalities().subscribe({
      next: (nationalities) => {
        // console.log(nationalities.response, 'nationality')
        this.nationalities = nationalities.response;
      },
      error: (error) => {
        this.toastService.showToastByStatusCode('top', error.status, error.error.message);
      }
    })
  }


  calculateAge(dob: string): number {
    if (!dob) return 0;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  isModalOpen = false;

  setOpen() {
    this.navCtrl.navigateBack('hireNow/brows-search')
  }

  async openWorkerDetailModal(worker: any) {
    const modal = await this.modalController.create({
      component: WorkerDetailsComponent,
      componentProps: { worker }
    });
    await modal.present();
  }

  clearFilters() {
    // this.initializeForm();
    // this.fetchAllWorkers();
  }
  ngOnInit() {
    // this.fetchAllWorkers()
    // this.fethNationalities()
  }

  shortlistWorker(worker: any) {
    const	requestBody ={
        "delete" : true, 		// if true then shortlisted and if false then unshortlisted
        "dwAgencyId" : worker.agencyId,		// domestic worker agency id
        "dwId" : worker.id	      // domestic worker id
      }

    this.globalService.shortlistWorker(requestBody).subscribe({
      next: () => {

      },
      error: () => {

      }
    })
  }

}
