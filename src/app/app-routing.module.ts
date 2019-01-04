import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityCardListComponent } from './components/activity-card-list/activity-card-list.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ActivityStepperComponent } from './components/activity-stepper/activity-stepper.component'

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: TabsComponent },
  { path: 'stepper', component: ActivityStepperComponent },
  { path: 'firstPage', component: ActivityCardListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
