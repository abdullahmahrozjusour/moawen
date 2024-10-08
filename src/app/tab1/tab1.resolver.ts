import {Injectable} from '@angular/core';
import { GlobalService } from '../services/http/global.service';
import { ToastService } from '../services/toast.service';
import { LoaderService } from '../services/loader.service';


@Injectable()

export class UserResolver {
    constructor(private globalService: GlobalService,
      private toastService: ToastService,
      private loaderService:LoaderService
    ) {
    }

    resolve() {
      this.loaderService.showLoading();

      const userDetails = new Promise((resolve, reject) => {
          this.globalService.resolveUser().subscribe((res: any) => {
            this.loaderService.hideLoading();
            resolve(res);
          });
      });

      return Promise.all([userDetails]);
    }
}
