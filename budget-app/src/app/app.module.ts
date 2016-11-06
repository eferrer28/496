import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { Page1, Page2, Profile, MakeLog, Welcome, Vibrate} from '../pages/pages';
import { BudgetApi } from '../shared/shared';
import { LogApi } from '../shared/log-api.service';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '2b180d6e'
  }
};


@NgModule({
    //Every new page created must go here
  declarations: [
    MyApp,
    Page1,
    Page2,
    Profile,
    MakeLog,
    Welcome,
    Vibrate
    
  ],
  imports: [
    IonicModule.forRoot(MyApp),
	CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Profile,
    MakeLog,
    Welcome,
    Vibrate
  ],
  providers: []
})
export class AppModule {}
