import IProject from "./Project";

type SceneBase = Omit<IProject, "description">;

export default interface IScene extends SceneBase {
    project: number;
}
