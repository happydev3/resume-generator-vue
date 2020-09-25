<template>
  <div class="personal-container" v-if="data">
    <div class="personal">
      <img class="personal__image" v-if="data.image" :src="data.image" />
      <div class="personal__info">
        <div class="personal__name">{{data.firstName}} {{data.lastName}}</div>
        <div class="personal__position">{{data.jobTitle}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style scoped>
img {
  max-width: 200px;
}
</style>