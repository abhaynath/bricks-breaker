<script type="ts">
  import { screenStore } from "../../../src/stores/screenStore";

  const startGame = () => {
    console.log("start game");
    screenStore.startGame();
  };
</script>

<div>
  <h1>Ball Breaker</h1>
  <button on:click={startGame}>Start</button>
</div>
