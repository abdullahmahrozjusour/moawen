import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/http/global.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-brows-search',
  templateUrl: './brows-search.component.html',
  styleUrls: ['./brows-search.component.scss'],
})
export class BrowsSearchComponent implements OnInit {

  searchForm!: FormGroup;
  nationalities: any = [];
  constructor(private fb: FormBuilder, private navCtrl: NavController,
    private globalService: GlobalService, private toastService: ToastService,
    private modalCtrl: ModalController
  ) {
  }


  ngOnInit() {
    this.searchFormBuild();
    this.fethNationalities()
  }


  searchFormBuild(){
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
      age: ['']
    });
  }


  applyFilter() {
    this.navCtrl.navigateForward('hireNow/brows-local', {
      state: { query: this.searchForm.value },
    });
  }


  fethNationalities() {
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


  close() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }


  selectedFilters() {

    this.close()
  }


  getSelectedValues(controlName: string) {
    const value = this.searchForm.get(controlName)?.value;
    return Array.isArray(value) ? value : [value]; // Ensure it returns an array
  }


  removeSelected(controlName: string, item: any) {
    const currentValues = this.getSelectedValues(controlName);
    const updatedValues = currentValues.filter(value => value !== item);
    this.searchForm.get(controlName)?.setValue(updatedValues);
  }

}
