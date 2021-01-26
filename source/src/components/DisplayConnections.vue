<template>
   <display-connection
  v-for="(item, index) in streams"
  :stream="item"
  :index="index"
  :key="item.for"
	 ></display-connection>

  
</template>

<script lang=ts src="./DisplayConnections.ts"></script>
