<script lang="ts">
  import type { ScreenStatus } from "../../../src/models/gameState";

  import { screenStore } from "../../../src/stores/screenStore";

  let currentScreen: ScreenStatus;

  screenStore.subscribe((val: ScreenStatus) => {
    currentScreen = val;
  });
  const gameOver = () => {
    console.log("game over");
    screenStore.gameOver();
  };

  const pauseGame = () => {
    screenStore.pauseGame();
  };
  const resumeGame = () => {
    screenStore.resumeGame();
  };
</script>

<h1>Play</h1>
<h3>{currentScreen.status}</h3>
<button on:click={pauseGame}>Pause</button>
<button on:click={resumeGame}>Resume</button>
<button on:click={gameOver}>Game over</button>
