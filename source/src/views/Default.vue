<template>
  <div class="row">
	<div class="col">
     <h1> Connection diagnostics </h1>
      <display-expiry :exp="exp"/>
      <display-connections :streams="decodedStreams"/>
    </div>
    <div class="col">
      <h1> Video </h1>
      <display-video :stream="videoStream"/>
	</div>
	<div class="col">
	  <h1> Data </h1>
      <display-data :stream="dataStream"/>
	</div>
</div>
</template> 


<script lang=ts src="./Default.ts"></script>
