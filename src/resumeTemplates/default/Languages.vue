<template>
  <div class="aside__section">
    <div class="aside__title">Languages</div>
    <div class="aside__content">
      <div
        v-for="language of data"
        :key="JSON.stringify(language)"
        class="aside__paragraph aside__paragraph--sm"
      >
        <div class="aside__text">{{language.name}}</div>
        <div class="progress" v-if="language.level">
          <div
            class="progress__inner setting--primary-background"
            :style="{width: language.level+'%'}"
          ></div>
        </div>
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