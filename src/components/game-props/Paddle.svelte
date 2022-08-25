<script lang="ts">
  import type { PaddleModel } from "../../../src/models/paddle";

  export let data: PaddleModel;
</script>

<div class="paddle" style="width:{data.width}px; height:{data.height}px;left:{data.x - data.width / 2}px;top:{data.y - data.height / 2}px;">
  <svg viewBox="0 0 81 9">
    <rect x="0.5" y="0.5" fill="#F1FF60" stroke="#EB7C00" stroke-miterlimit="10" width="80" height="8" />
  </svg>
</div>

<style>
  .paddle {
    position: absolute;
  }
</style>
