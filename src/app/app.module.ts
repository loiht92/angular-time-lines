import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TimelinesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes,
      {preloadingStrategy: PreloadAllModules})],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
