import IProject from "./Project";

export default interface ITask extends IProject {
    type: number;
    executor: number | null;
    project: number;
    scene: number;
}
