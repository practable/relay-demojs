<template>

  This session {{ finishWord }} at {{ finishes }}

  <div v-if="!expired">which is in {{ timerCount }} seconds</div>
  <div v-if="expired">which was {{ ago }} seconds ago</div>
  
</template>

<script lang="ts" src="./DisplayExpiry.ts"></script>
