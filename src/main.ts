import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {provideHttpClient} from '@angular/common/http';


defineCustomElements(window);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
