import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatTabsModule,
  MatMenuModule,
  MatChipsModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatStepperModule
 } from '@angular/material';

import { TabsComponent } from './components/tabs/tabs.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { SidebarActivityListComponent } from './components/sidebar-activity-list/sidebar-activity-list.component';
import { ActivityCardListComponent } from './components/activity-card-list/activity-card-list.component';
import { ActivityStepperComponent } from './components/activity-stepper/activity-stepper.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { ContributeComponent } from './components/contribute/contribute.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TabsComponent,
    ActivityCardComponent,
    SidebarActivityListComponent,
    ActivityCardListComponent,
    ActivityStepperComponent,
    GetStartedComponent,
    ContributeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatMenuModule,
    MatChipsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
