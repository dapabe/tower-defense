import { AxesHelper, Scene } from "three";
import { AbsScene } from "../abstracts/scene.abstract";

export class MenuScene implements AbsScene {
	public scene = new Scene();

	public init(): void {
		this.scene.add(new AxesHelper());
	}
	public update(): void {}
}
