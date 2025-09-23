export default interface ITaskData {
    id: number;
    type: number;
    task_id: number;
    text: string | null;
    media: string | null;
    created_at: string;
    created_by: number;
    status: number;
    spent_hours: number | null;
}

export type TaskDataMin = Omit<ITaskData, "id" | "text" | "media"> & {
    text?: string;
};
