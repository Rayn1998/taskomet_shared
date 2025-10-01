export default interface IEntityProgress {
    entityId: number;
    progress: {
        status: number;
        amount: number;
    }[];
    priority: {
        priority: number;
        amount: number;
    }[];
    spentHours?: number;
    executorsCount?: number;
}
