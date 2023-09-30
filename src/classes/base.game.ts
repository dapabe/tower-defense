import { WebGLRenderer } from "three";
import { AbsFlow } from "./abstracts/flow.abstract";
import { BaseCamera } from "./base.camera";
import { SceneLoader } from "./scene.loader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class BaseGame implements AbsFlow {
	private renderer = new WebGLRenderer();
	public sceneLoader = new SceneLoader();
	public baseCamera = new BaseCamera();

	constructor() {
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.querySelector("#app")!.appendChild(this.renderer.domElement);
		new OrbitControls(this.baseCamera.camera, this.renderer.domElement);
	}

	public init() {
		this.sceneLoader.init();
		this.baseCamera.init();
	}

	public update() {
		this.sceneLoader.update();
		this.baseCamera.update();
	}

	public render() {
		this.renderer.render(
			this.sceneLoader.currentScene.scene,
			this.baseCamera.camera
		);
	}
}
