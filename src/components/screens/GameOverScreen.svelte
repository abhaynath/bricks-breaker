<script lang="ts">
  import { screenStore } from "../../../src/stores/screenStore";

  const restartGame = () => {
    console.log("restart game");
    screenStore.welcomeScreen();
  };
</script>

<h1>Score : 80</h1>
<button on:click={restartGame}>Restart</button>
