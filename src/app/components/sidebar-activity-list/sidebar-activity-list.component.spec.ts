import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SidebarActivityListComponent } from './sidebar-activity-list.component';
import { MockServiceFactory } from '@app/shared/test/mock-service-factory.spec';
import { ActivityListService } from '@app/services/activity-list.service';

describe('SidebarActivityListComponent', () => {
    let component: SidebarActivityListComponent;
    let fixture: ComponentFixture < SidebarActivityListComponent > ;

    beforeEach(async (() => {
        TestBed.configureTestingModule({
            declarations: [ SidebarActivityListComponent ],
            providers: [{
                provide: ActivityListService,
                useValue: MockServiceFactory.createActivityListService()
            }],
            schemas: [ NO_ERRORS_SCHEMA ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarActivityListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
