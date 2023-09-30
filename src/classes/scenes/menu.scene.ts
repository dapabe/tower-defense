import { AxesHelper, Scene } from "three";
import { AbsScene } from "../abstracts/scene.abstract";
import { getElement } from "../../common/helpers";

export class MenuScene implements AbsScene {
	public scene = new Scene();
	private btn = getElement<HTMLButtonElement>("#load");

	public init(): void {
		this.btn.addEventListener("click", (ev) => {
			this.scene.removeFromParent();
		});
		this.scene.add(new AxesHelper());
	}
	public update(): void {}
}
