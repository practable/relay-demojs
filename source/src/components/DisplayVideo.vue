<template>

<h1> Video:  {{ topic }} </h1>
<div>
<video-element :url="url"/>
</div>
{{ url }}
</template>

<script lang="ts" src="./DisplayVideo.ts"></script>
