export class Tab {
  id: string;
  name: string;
}

export class Activity {
  id: number;
  title: string;
  subline: string;
  description: string;
  sourceName: string;
  sourceUrl: string;
  type: string;
}

export class Activities {
  results: Activity[];
}
