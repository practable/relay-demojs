<template>
<div id="data-box" class="textbox" contenteditable="true"></div>
</template>

<script lang="ts" src="./DataElement.ts"></script>

<style>    
 div.textbox {
   background-color: #ececec;
   height: 500px;
   max-height: 500px;
   width: 500px;  
   overflow-x: hidden;
   overflow-y: scroll;
 }
</style>
