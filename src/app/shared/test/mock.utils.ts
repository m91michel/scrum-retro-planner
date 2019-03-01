import { Activity } from '../../models/model';
import { Observable, of } from 'rxjs';

export class MockActivityService {
    getActivities(): Observable<Activity[]> {
        return of([]);
    }
}

export class ActivityListService {
    add(activity: Activity): void { }

    get(): Activity[] {
    return [];
    }

    remove(activity: Activity): void { }

    clear(): void { }
}
