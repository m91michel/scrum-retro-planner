import { Activity, Activities } from '@app/models/model';

export class MockObjectFactory {
    static createActivity(): Activity {
        return {
            title: 'title',
            subline: 'subline',
            id: 1,
            description: 'string',
            sourceName: 'string',
            sourceUrl: 'string',
            type: 'string',
        };
    }

    static createActivities(): Activities {
        return {
            results: [this.createActivity()]
        };
    }
}
