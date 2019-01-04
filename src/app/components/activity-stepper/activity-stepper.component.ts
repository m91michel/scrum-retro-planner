import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tab } from '../../models/model';

@Component({
  selector: 'app-activity-stepper',
  templateUrl: './activity-stepper.component.html',
  styleUrls: ['./activity-stepper.component.scss']
})
export class ActivityStepperComponent implements OnInit {
  public tabs: Tab[] = [
    {id: 'checkIn', name: 'Check In'},
    {id: 'data', name: 'Gather Data'},
    {id: 'insights', name: 'Generate Insights'},
    {id: 'decide', name: 'Decide What To Do'},
    {id: 'checkOut', name: 'Check Out'}
  ];

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() { }

  next(): void {
    console.log('next');
  }
}
