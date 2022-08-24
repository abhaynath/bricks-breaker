<script lang="ts">
  import { BrickModel } from "../../../src/models/brick";

  import { BallModel } from "../../../src/models/ball";

  import { GameStatus, type ScreenStatus } from "../../../src/models/gameState";

  import { screenStore } from "../../../src/stores/screenStore";
  import Ball from "../game-props/Ball.svelte";
  import Brick from "../game-props/Brick.svelte";

  let ball = new BallModel();
  ball.setPosition(300, 200);
  let wall: BrickModel[] = [];

  let currentScreen: ScreenStatus;
  let key = "";
  let keyCode = 0;

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
  const onKeyDown = (e: KeyboardEvent) => {
    console.log(`onkeydown ${currentScreen.status}`);
    if (currentScreen.status == GameStatus.RUNNING) {
      console.log(e);
      key = e.key;
      keyCode = e.keyCode;
    }
  };

  const createGrid = () => {
    const xGap = 50;
    const yGap = 20;
    for (let columns = 1; columns <= 10; columns++) {
      for (let rows = 1; rows <= 5; rows++) {
        let type = Math.floor(Math.random()*4);
        wall.push(new BrickModel(columns * xGap, rows * yGap,type));
      }
    }
  };
  createGrid();
</script>

<svelte:window on:keydown={onKeyDown} />
<!-- <h3>{currentScreen.status}</h3> -->
<div class="play-screen">
  <Ball data={ball} />
  {#each wall as brick}
    <Brick data={brick} />
  {/each}
</div>

<!-- <div class="toolbar">
  <button on:click={pauseGame}>Pause</button>
  <button on:click={resumeGame}>Resume</button>
  <button on:click={gameOver}>Game over</button>
</div> -->
<style>
  .play-screen {
    position: relative;
    background-color: #2f013d;
    width: 100%;
    height: 100%;
  }
  .toolbar {
    display: flex;
    justify-content: center;
  }
</style>
