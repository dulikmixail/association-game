export interface ProgressSocketEvent {
  category: {
    current: number;
    key: string;
    last: number;
    name: string;
  };
  page: {
    current: number;
    last: number;
  };
  sourceId: string;
}
