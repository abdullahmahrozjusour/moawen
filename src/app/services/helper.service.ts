import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class HelperService {
    private loader: any;

    constructor(
        // private loadingCtrl: LoadingController,
        // private toastController: ToastController,
    ) {
    }

    /**
     * use to trigger fields to validate
     *
     * @form: form instance of reactive form
     * **/
    markedFieldToValidate(form: FormGroup | any, makeTouchable = true): void {
        Object.keys(form.controls).forEach(field => {
            const control = form.controls[field];

            if (control.controls) {
                this.markedFieldToValidate(control);
            }
            control.markAsTouched({onlySelf: makeTouchable});
        });
    }

    removeNullValuesObject(filters: any) {
        Object.keys(filters).forEach(key => {
            if (filters[key] && typeof filters[key] === "object") {
                this.removeNullValuesObject(filters[key]);
            } else if (filters[key] === null) {
                delete filters[key];
            }
        });

        return filters
    }

    static markedFieldToValidate(form: FormGroup | any, makeTouchable = true): void {
        Object.keys(form.controls).forEach(field => {
            const control = form.controls[field];

            if (control.controls) {
                this.markedFieldToValidate(control);
            }
            control.markAsTouched({onlySelf: makeTouchable});
        });
    }

    static getRandomInteger() {
        return parseInt(Math.random().toString().split(".").join(''));
    }

    static getNthChildArrayValue(keyString: any, array: any) {
        const keysArray = keyString.split('.');
        keysArray.forEach((val: any) => {
            array = array !== null && array[val] !== undefined ? array[val] : null;
        });
        return array;
    }

    static getFieldIndex(array: any, filter: any): any {
        return array.findIndex((item: any) => {
            for (const key in filter) {
                if (item[key] === undefined || item[key] != filter[key])
                    return false;
            }
            return true;
        });
    }

    static getFilterArray(array: any, filter: any): any {
        return array.filter((item: any) => {
            for (const key in filter) {
                if (item[key] === undefined || item[key] != filter[key])
                    return false;
            }
            return true;
        });
    }

    static mapObjectToArray(obj: any): any {
        return Object.entries(obj).reduce((arr: any, [key, value]: any) => {
            if (typeof value === 'object' && value !== null) {
                return arr.concat(this.mapObjectToArray(value));
            } else {
                return arr.concat(value);
            }
        }, []);
    }

    static isNull(value: any): boolean {
        return value == null || value == 'null' || value == "";
    }

    static convertJsonIntoForm(item: any) {
        const formData = new FormData();
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                if (Array.isArray(item[key])) {
                    item[key].forEach((obj: any, index: any) => {
                        for (const nestedKey in obj) {
                            if (obj.hasOwnProperty(nestedKey)) {

                                if (typeof obj[nestedKey] === 'object') {
                                    for (const nestedChildKey in obj[nestedKey]) {
                                        if (obj[nestedKey].hasOwnProperty(nestedChildKey)) {
                                            let val = obj[nestedKey][nestedChildKey];
                                            if (val == 'false' || val == '0') {
                                                val = 0;
                                            } else if (val == 'true' || val == '1') {
                                                val = 1;
                                            }

                                            formData.append(`${key}[${index}][${nestedKey}][${nestedChildKey}]`, val);
                                        }
                                    }
                                } else {
                                    let val = obj[nestedKey];
                                    if (val == 'false' || val == '0') {
                                        val = 0;
                                    } else if (val == 'true' || val == '1') {
                                        val = 1;
                                    }

                                    formData.append(`${key}[${index}][${nestedKey}]`, val);
                                }
                            }
                        }
                    });
                } else if (typeof item[key] === 'object') {
                    for (const nestedKey in item[key]) {
                        if (item[key].hasOwnProperty(nestedKey)) {
                            let val = item[key][nestedKey];
                            if (val == 'false' || val == '0') {
                                val = 0;
                            } else if (val == 'true' || val == '1') {
                                val = 1;
                            }

                            formData.append(`${key}[${nestedKey}]`, val);
                        }
                    }
                } else {
                    let val = item[key];
                    if (val == 'false' || val == '0') {
                        val = 0;
                    } else if (val == 'true' || val == '1') {
                        val = 1;
                    }
                    formData.append(key, val);
                }
            }
        }

        return formData;
    }


    // async showLoading() {
    //   this.loader = await this.loadingCtrl.create({
    //     message: 'Loading...',
    //   });
    //
    //   await this.loader.present();
    // }

    // async showError(message: string, title: string = ''): Promise<void> {
    //   const toast = await this.toastController.create({
    //     message: message,
    //     duration: 1500,
    //     position: 'top',
    //     color: 'danger',
    //     icon: 'bug-outline',
    //   });
    //   await toast.present();
    // }


    // async showSuccess(message: string, title: string = ''): Promise<void> {
    //   const toast = await this.toastController.create({
    //     message: message,
    //     duration: 1500,
    //     position: 'top',
    //     color: 'success',
    //     icon: 'checkmark-circle-outline'
    //   });
    //   await toast.present();
    // }

    // async shownWarning(message: string, title: string = ''): Promise<void> {
    //   const toast = await this.toastController.create({
    //     message: message,
    //     duration: 1500,
    //     position: 'top',
    //     color: 'warning',
    //     icon: 'alert-outline'
    //   });
    //   await toast.present();
    // }
}
