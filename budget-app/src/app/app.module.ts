import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { Page1, Page2, Profile, MakeLog, Welcome} from '../pages/pages';
import { BudgetApi } from '../shared/shared';
import { LogApi } from '../shared/log-api.service'




@NgModule({
    //Every new page created must go here
  declarations: [
    MyApp,
    Page1,
    Page2,
    Profile,
    MakeLog,
    Welcome
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Profile,
    MakeLog,
    Welcome
  ],
  providers: []
})
export class AppModule {}
