import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarActivityListComponent } from './sidebar-activity-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SidebarActivityListComponent', () => {
    let component: SidebarActivityListComponent;
    let fixture: ComponentFixture < SidebarActivityListComponent > ;

    beforeEach(async (() => {
        TestBed.configureTestingModule({
            declarations: [SidebarActivityListComponent],
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
