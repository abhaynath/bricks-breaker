<script lang="ts">
  import type { BallModel } from "../../../src/models/ball";

  export let data: BallModel;
</script>

<div class="ball" style="width:{data.radius * 2}px;height:{data.radius * 2}px;left:{data.x - data.radius}px;top:{data.y - data.radius}px;">
  <svg viewBox="0 0 222 222">
    <radialGradient id="SVGID_1_" cx="111" cy="111" r="110" gradientUnits="userSpaceOnUse">
      <stop offset="0" style="stop-color:#FFF72A" />
      <stop offset="1" style="stop-color:#FF0000" />
    </radialGradient>
    <circle fill="url(#SVGID_1_)" stroke="#F3EB00" stroke-width="2" stroke-miterlimit="10" cx="111" cy="111" r="110" />
  </svg>
</div>

<style>
  .ball {
    position: absolute;
    /*  width: 20px;
    height: 20px; */
    /* background-color: green; */
  }
</style>
