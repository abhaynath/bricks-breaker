<script lang="ts">
  import type { BrickModel } from "@models/brick";

  export let data: BrickModel;
</script>

<div class="brick" style="width:{data.width}px; height:{data.height}px;left:{data.x}px;top:{data.y}px;">
  <svg viewBox="0 0 980.9 346.1">
    <g>
      <polygon fill="#FF2626" stroke="#000000" stroke-miterlimit="10" points="979.4,345 1.4,345 44.4,311 936.4,311 	" />
      <polygon fill="#FFAC9A" stroke="#000000" stroke-miterlimit="10" points="44.4,35 44.4,311 1.4,345 1.4,1 	" />
      <polygon fill="#FF7C70" stroke="#000000" stroke-miterlimit="10" points="979.4,1 936.4,35 44.4,35 1.4,1 	" />
      <polygon fill="#B50A00" stroke="#000000" stroke-miterlimit="10" points="979.4,1 979.4,345 936.4,311 936.4,35 	" />
      <rect x="44.4" y="35" fill={data.color} stroke="#000000" stroke-miterlimit="10" width="892" height="276" />
    </g>
  </svg>
</div>

<style>
  .brick {
    position: absolute;
  }
</style>
