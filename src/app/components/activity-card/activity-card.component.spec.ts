import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule, MatChipsModule } from '@angular/material';
import { Activity } from '../../models/model';

import { ActivityCardComponent } from './activity-card.component';

describe('ActivityCardComponent', () => {
  let component: ActivityCardComponent;
  let fixture: ComponentFixture<ActivityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityCardComponent ],
      imports: [MatCardModule, MatIconModule, MatChipsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityCardComponent);
    component = fixture.componentInstance;
    const activity: Activity = {
      title: 'title',
      subline: 'subline',
      id: 10,
      description: 'string',
      sourceName: 'string',
      sourceUrl: 'string',
      type: 'string',
    };
    component.activity = activity;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
