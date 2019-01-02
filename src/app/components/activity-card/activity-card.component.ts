import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../../models/model';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent implements OnInit {
  @Input() public activity: Activity;

  constructor() { }

  ngOnInit() {
  }

}
