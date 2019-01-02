export class Element {
  id: number;
  name: string;
}

export class Elements {
  elements: Element[];
}

export class Tab {
  id: number;
  name: string;
}

export class Activity {
  id: number;
  name: string;
  subline: string;
  description: string;
  sourceName: string;
  sourceUrl: string;
  type: string;
}

export class Activities {
  activities: Activity[];
}
