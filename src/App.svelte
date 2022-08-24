<script lang="ts">
  import type { ScreenStatus } from "./models/gameState";
 
  import { screenStore } from "./stores/screenStore";

  let currenScreen: ScreenStatus;
  screenStore.subscribe((val: ScreenStatus) => {
    currenScreen = val;
  });
</script>

<!-- <h1>{currenScreen.status}</h1> -->
<div class="container">
  <svelte:component this={currenScreen.component} />
</div>

<style>
  .container{
    margin:10px;
    background-color: black;
    color:white;
    width:600px;
    height:400px;
    display: flex;
    flex-direction: column;
  }
</style>
