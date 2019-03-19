import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivityService } from './activity.service';

describe('ActivityService', () => {
    let injector: TestBed;
    let service: ActivityService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ActivityService]
        });
        injector = getTestBed();
        service = injector.get(ActivityService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should return an Observable<Activity[]>', () => {
        const dummyActivity = {
            results: [{
                id: 1,
                title: 'title',
                subline: 'subline',
                type: 'CHECK_IN',
                sourceName: 'source',
                sourceUrl: 'link',
                description: 'description'
            }]
        };

        service.getActivities().subscribe(activities => {
            expect(activities.length).toBe(1);
            expect(activities).toEqual(dummyActivity.results);
        });

        const req = httpMock.expectOne(`./api/activities.json`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyActivity);
    });
});
