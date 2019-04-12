export class FeatureRequestItem {
    id: number;
    name: string;
    description: string;
    comment: string;
    comments: string[];
    numberOfVotes: number;
    isDone: boolean;
    addedToBacklog: boolean;
    creationDate: Date;
    lastEditDate: Date;
}
