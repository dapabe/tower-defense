import { PerspectiveCamera } from "three";
import { AbsFlow } from "./abstracts/flow.abstract";

export class BaseCamera implements AbsFlow {
	public camera = new PerspectiveCamera(
		100,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	constructor() {
		this.camera.position.y = 1;
	}

	public init(): void {}
	public update(): void {
		// console.log(this.camera.);
	}
}
