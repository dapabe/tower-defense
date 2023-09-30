import { GridHelper, Scene } from "three";
import { AbsScene } from "../abstracts/scene.abstract";

export class MapScene_1 implements AbsScene {
	public scene = new Scene();
	public init(): void {
		const grid = new GridHelper(1, 5);
		this.scene.add(grid);
	}
	public update(): void {}
}
