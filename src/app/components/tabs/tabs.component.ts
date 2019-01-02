import { Component, OnInit } from '@angular/core';
import { Tab } from '../../models/model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  public tabs: Tab[] = [
    {id: 1, name: 'Check In'},
    {id: 1, name: 'Gather Data'},
    {id: 1, name: 'Generate Insights'},
    {id: 1, name: 'Decide What To Do'},
    {id: 1, name: 'Check Out'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
