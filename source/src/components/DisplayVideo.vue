<template>
<div>
<video-element v-if="urlOK"  :url="url"/>
</div>
{{ url }}
</template>

<script lang="ts" src="./DisplayVideo.ts"></script>
