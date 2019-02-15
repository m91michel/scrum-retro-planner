import { Component, OnInit } from '@angular/core';
import { Tab } from '../../models/model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  public tabs: Tab[] = [
    {id: 'checkIn', name: 'Check In'},
    {id: 'data', name: 'Gather Data'},
    {id: 'insights', name: 'Generate Insights'},
    {id: 'decide', name: 'Decide What To Do'},
    {id: 'checkOut', name: 'Check Out'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
