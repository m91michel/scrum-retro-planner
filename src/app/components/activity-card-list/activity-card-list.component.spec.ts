import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule, MatChipsModule } from '@angular/material';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { ActivityCardListComponent } from './activity-card-list.component';
import { ActivityCardComponent } from '@app/components/activity-card/activity-card.component';
import { ActivityService } from '@app/services/activity.service';
import { ActivityListService } from '@app/services/activity-list.service';
import { MockServiceFactory } from '@app/shared/test/mock-service-factory.spec';

describe('ActivityCardListComponent', () => {
    let component: ActivityCardListComponent;
    let fixture: ComponentFixture < ActivityCardListComponent > ;
    let debugElement: DebugElement;

    beforeEach(async (() => {
        TestBed.configureTestingModule({
                declarations: [ ActivityCardListComponent, ActivityCardComponent ],
                imports: [ MatCardModule, MatIconModule, MatChipsModule ],
                providers: [{
                        provide: ActivityService,
                        useValue: MockServiceFactory.createActivityService()
                    },
                    {
                        provide: ActivityListService,
                        useValue: MockServiceFactory.createActivityListService()
                    }
                ],
                schemas: [NO_ERRORS_SCHEMA]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActivityCardListComponent);
        debugElement = fixture.debugElement;
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('#getActivities should return stubbed value from a spy', () => {
        const  mockActivityService = TestBed.get(ActivityService);
        const stubValue = 'stub value';
        mockActivityService.getActivities.and.returnValue(stubValue);

        expect(mockActivityService.getActivities()).toBe(stubValue, 'service returned stub value');
        expect(mockActivityService.getActivities.calls.mostRecent().returnValue).toBe(stubValue);
    });
});
