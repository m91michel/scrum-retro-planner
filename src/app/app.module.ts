import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
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
  MatGridListModule
 } from '@angular/material';

import { TabsComponent } from './components/tabs/tabs.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { SidebarActivityListComponent } from './components/sidebar-activity-list/sidebar-activity-list.component';
import { ActivityCardListComponent } from './components/activity-card-list/activity-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TabsComponent,
    ActivityCardComponent,
    SidebarActivityListComponent,
    ActivityCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    LayoutModule,
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
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
