import { AbsFlow } from "./abstracts/flow.abstract";
import { MenuScene } from "./scenes/menu.scene";
import { AbsScene } from "./abstracts/scene.abstract";
import { Scene } from "three";

export class SceneLoader implements AbsFlow {
	public loaderScene = new Scene();
	public currentScenes: Array<AbsScene> = [];

	constructor() {
		this.currentScenes.push(new MenuScene());
		this.loaderScene.add(this.currentScenes[0].scene);
	}

	public init(): void {
		this.currentScenes[0].init();
	}
	public update(): void {
		this.currentScenes[0].update();
	}
}
