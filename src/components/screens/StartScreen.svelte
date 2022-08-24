<script type="ts">
  import { screenStore } from "../../../src/stores/screenStore";

  const startGame = () => {
    console.log("start game");
    screenStore.startGame();
  };
</script>

<div class="start-screen">
  <h1>Bricks Breaker !</h1>
  <button on:click={startGame}>Start</button>
</div>

<style>
  .start-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(63, 63, 63);
    flex-grow: 1;
  }
  h1 {
    text-align: center;
  }
</style>
