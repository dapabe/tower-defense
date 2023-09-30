import { Scene } from "three";
import { AbsFlow } from "./flow.abstract";

export abstract class AbsScene implements AbsFlow {
	public scene = new Scene();

	public init(): void {}
	public update(): void {}
}
