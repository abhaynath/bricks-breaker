<script lang="ts">
  import type { ScreenStatus } from "./models/gameState";
 
  import { screenStore } from "./stores/screenStore";

  let currenScreen: ScreenStatus;
  screenStore.subscribe((val: ScreenStatus) => {
    currenScreen = val;
  });
</script>

<div>
  <h1>{currenScreen.status}</h1>
  <svelte:component this={currenScreen.component} />
</div>

<style>
</style>
