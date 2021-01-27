<template>
  <div class="col">
	<div class="row">
	  <h4> Read </h4>
	</div>
	  <div class="row">
	  <div id="data-box" class="textbox" contenteditable="true"></div>
	</div>
	
	<div class = "row">
	  <h4> Write </h4>
	</div>
	<div class = "row">	  
	  <div id="cmd-box" class="textbox" contenteditable="true"></div>
	</div>
	<div class = "row">
	  <button type="button" @click="clear"  class="btn btn-secondary" id="cmd-btn">
	  Clear <span class="caret"></span>
	  </button>
		<button type="button" @click="send"  class="btn btn-primary" id="cmd-btn">
	  Send <span class="caret"></span>
	</button>
					
		</div>
	</div>
</template>

<script lang="ts" src="./DataElement.js"></script>

<style>    
 div.textbox {
   background-color: #ececec;
   height: 100px;
   max-height: 100px;
   width: 500px;  
   overflow-x: hidden;
   overflow-y: scroll;
 }
</style>
