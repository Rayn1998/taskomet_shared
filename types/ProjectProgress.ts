export default interface IProjectProgress {
    projectId: number;
    progress: {
        status: number;
        amount: number;
    }[];
}
