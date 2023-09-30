import { BaseGame } from "./classes/base.game";

const game = new BaseGame();

game.init();

function animate() {
	requestAnimationFrame(animate);
	game.update();
	game.render();
}

animate();
