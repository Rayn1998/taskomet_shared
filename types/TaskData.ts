export default interface ITaskData {
    id: number;
    type: number;
    task_id: number;
    text: string;
    media: string | null;
    created_at: Date;
    created_by: number | null;
}
