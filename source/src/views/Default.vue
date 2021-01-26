<template>
<h1> Connection diagnostics </h1>
<display-connections :streams="decodedStreams"/>
<display-video :stream="videoStream"/>

</template> 


<script lang=ts src="./Default.ts"></script>
