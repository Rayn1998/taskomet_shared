import IProject from "./Project";

export default interface ITask extends IProject {
    id: number;
    type: number;
    executor: number | null;
    project: number;
    scene: number;
    project_name: string;
    scene_name: string;
}
