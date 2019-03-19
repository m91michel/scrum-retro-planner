import { of } from 'rxjs';

export class MockServiceFactory {
    static createActivityService() {
        const service = jasmine.createSpyObj('ActivityService', ['getActivities']);
        const emptyArray = of([]);
        service.getActivities.and.returnValue(emptyArray);
        return service;
    }

    static createActivityListService() {
        const service = jasmine.createSpyObj('ActivityListService', ['add', 'loadSessionStorage', 'remove', 'clear']);
        service.activities$ = of([]);
        return service;
    }
}
