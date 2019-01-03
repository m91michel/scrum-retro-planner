import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityCardListComponent } from './components/activity-card-list/activity-card-list.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: TabsComponent },
  { path: 'firstPage', component: ActivityCardListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
