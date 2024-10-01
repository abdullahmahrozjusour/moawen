import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService extends CoreService {

  resolveUser(): Observable<any> {
    return this.get('/customer/resolve');
  }

  submitRecruitmentApplication(data: any): Observable<any> {
    return this.post('/recruitment/application', { params: data });
  }

  fetchAllNationalities(): Observable<any[]> {
    return this.get('/nationalities');
  }

  searchWorkers(query: any): Observable<any[]> {
    return this.post('/customer/browseWorkers', { params: { query } });
  }

  shortlistWorker(data: any): Observable<any> {
    return this.post('/customer/shortListAndUnshortList', { params: data });
  }

  fetchVisaPermits(): Observable<any[]> {
    return this.get('/customer/fetchVisaPermits');
  }

  fetchActiveAgencies(): Observable<any[]> {
    return this.get('/fetchActiveAgencies');
  }

  getWorkerDetails(dwId: number): Observable<any> {
    return this.get('/getDomesticWorker', { params: { dwId: dwId.toString() } });
  }
}
