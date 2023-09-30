import { AbsFlow } from "./abstracts/flow.abstract";
import { MenuScene } from "./scenes/menu.scene";
import { AbsScene } from "./abstracts/scene.abstract";

export class SceneLoader implements AbsFlow {
	public currentScene: AbsScene;

	constructor() {
		this.currentScene = new MenuScene();
	}

	public init(): void {
		this.currentScene.init();
		// grid.rotation.x = ;
	}
	public update(): void {
		// cube.rotation.x += 0.001;
		// console.log(this.scene.);
	}
}
