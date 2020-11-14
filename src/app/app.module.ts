import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { DashboardModule } from './dashboard/dashboard.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { ScriptLoaderService } from 'angular-google-charts';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    GoogleChartsModule,
    MaterialModule
  ],
  providers: [ScriptLoaderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
