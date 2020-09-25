<template>
  <div class="aside__section">
    <div class="aside__title">Test Scores</div>
    <div class="aside__paragraph">
      <div v-for="test in data" :key="JSON.stringify(test)" class="aside__text">
        <div
          class="setting--primary-text"
          :href="test.test"
          target="_blank"
        >{{test.name}} - {{test.score}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style>
</style>