<script type="ts">
  import { screenStore } from "../../../src/stores/screenStore";

  const startGame = () => {
    console.log("start game");
    screenStore.startGame();
  };
</script>

<div class="start-screen">
  <div class="title">Bricks Breaker !</div>
  <div class="btn">
    <button on:click={startGame}>Start</button>
  </div>
</div>

<style>
  .start-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(63, 63, 63);
    flex-grow: 1;
    background: url("../../assets/welcome.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .title {
    text-align: center;
    font-size: 4em;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 15px #000;
  }
  .btn{
    display: flex;
    justify-content: center;
  }
</style>
