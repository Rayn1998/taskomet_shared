type BaseData = {
    id: number;
    text: string | null;
    media: string | null;
    created_at: string;
    created_by: number;
};

export interface IProjectData extends BaseData {
    project_id: number;
}

export type ProjectDataMin = Omit<IProjectData, "id" | "text" | "media"> & {
    text?: string;
};

export interface ISceneData extends BaseData {
    scene_id: number;
}

export type SceneDataMin = Omit<ISceneData, "id" | "text" | "media"> & {
    text?: string;
};

export interface ITaskData extends BaseData {
    type: number;
    task_id: number;
    status: number;
    spent_hours: number | null;
}

export type TaskDataMin = Omit<ITaskData, "id" | "text" | "media"> & {
    text?: string;
};
