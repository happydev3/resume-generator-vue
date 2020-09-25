<template>
  <div class="aside__section">
    <div class="aside__title">Links</div>
    <div class="aside__paragraph">
      <div v-for="link in data" :key="JSON.stringify(link)" class="aside__text">
        <a
          class="aside__link setting--primary-text"
          :href="link.link"
          target="_blank"
        >{{link.label}}</a>
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