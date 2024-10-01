import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/http/global.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { WorkerDetailsComponent } from 'src/app/shared/modals';

@Component({
  selector: 'app-brows-local',
  templateUrl: './brows-local.component.html',
  styleUrls: ['./brows-local.component.scss'],
})
export class BrowsLocalComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(private navCtrl: NavController, private globalService: GlobalService,
    private toastService: ToastService, private loaderService: LoaderService, private fb: FormBuilder,
    private modalController: ModalController

  ) {
    this.initializeForm()
    // this.searchForm = this.fb.group({
    //   nationality: [[]],
    //   profession: [[]],
    //   vpData: [[]],
    //   gender: [[]],
    //   religion: [[]],
    //   currentLocation: [['qatar']],   
    //   localNationality: [[]],
    //   skills: [[]],
    //   married: [''],   
    //   kids: [''],      
    //   age: [''],     
    //   agencyId: [0]
    // }); 
  }
  workers: any
  dob: string = '';
  navigateToViewWorker() {
    this.navCtrl.navigateRoot('/home/tab1/view-worker');
  }
  navigateToWorkerContract() {
    this.navCtrl.navigateRoot('/home/tab1/worker-contract');
  }

  private initializeForm() {
    this.searchForm = this.fb.group({
      nationality: [[]],
      profession: [[]],
      vpData: [[]],
      gender: [[]],
      religion: [[]],
      currentLocation: [['qatar']],
      localNationality: [[]],
      skills: [[]],
      married: [''],
      kids: [''],
      age: [''],
      agencyId: [0],
    });
  }

  fetchAllWorkers() {
    const query = this.searchForm.value;
    this.loaderService.showLoading() 
    this.globalService.searchWorkers(query).subscribe({
      next: (workers) => {
        console.log('Workers found:', workers.response);
        this.workers = workers.response,
        this.isModalOpen = false;
        this.loaderService.hideLoading() 
      },
      error: (error) => {
        this.toastService.showToastByStatusCode('top', error.status, error.error.message);
        this.loaderService.hideLoading() 
      }
    });
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

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async openWorkerDetailModal(worker: any) {
    const modal = await this.modalController.create({
      component: WorkerDetailsComponent,
      componentProps: { worker }
    });
    await modal.present();
  }

  clearFilters() {
    this.initializeForm(); // Reset the form to default values
    this.fetchAllWorkers(); // Optionally, fetch all workers again
  }
  ngOnInit() {
    this.fetchAllWorkers()
  }

}
