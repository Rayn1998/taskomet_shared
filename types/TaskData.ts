export default interface ITaskData {
    id: number;
    task_id: number;
    text: string;
    created_at: Date;
    created_by: number | null;
}
