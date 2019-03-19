import { Component, OnInit } from '@angular/core';
import { Tab } from '../../models/model';

@Component({
  selector: 'app-activity-stepper',
  templateUrl: './activity-stepper.component.html',
  styleUrls: ['./activity-stepper.component.scss']
})
export class ActivityStepperComponent implements OnInit {
  public tabs: Tab[] = [
    {id: 'CHECK_IN', name: 'Check In'},
    {id: 'GATHER_DATA', name: 'Gather Data'},
    {id: 'GET_INSIGHTS', name: 'Generate Insights'},
    {id: 'DECIDE', name: 'Decide What To Do'},
    {id: 'CHECK_OUT', name: 'Check Out'}
  ];

  constructor( ) { }

  ngOnInit() { }

  next(): void {
    console.log('next');
  }
}
