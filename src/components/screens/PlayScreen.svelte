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

<div class="play-screen">
  <h3>{currentScreen.status}</h3>
</div>
<div class="toolbar">
  <button on:click={pauseGame}>Pause</button>
  <button on:click={resumeGame}>Resume</button>
  <button on:click={gameOver}>Game over</button>
</div>

<style>
  .play-screen {
    background-color: rgb(78, 0, 102);
  }
  .toolbar{
    display: flex;
    justify-content: center;
  }
</style>
