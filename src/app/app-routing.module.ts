import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityCardListComponent } from './components/activity-card-list/activity-card-list.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ActivityStepperComponent } from './components/activity-stepper/activity-stepper.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { ContributeComponent } from './components/contribute/contribute.component';

const routes: Routes = [
  { path: '', redirectTo: '/get-started', pathMatch: 'full' },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'stepper', component: ActivityStepperComponent },
  { path: 'firstPage', component: ActivityCardListComponent },
  { path: 'contribute', component: ContributeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
