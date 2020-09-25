<template>
  <div class="aside__section">
    <div class="aside__title">Skills</div>
    <div class="aside__content">
      <div
        v-for="skill in data"
        :key="JSON.stringify(skill)"
        class="aside__paragraph aside__paragraph--sm"
      >
        <div class="aside__text">{{ skill.name }}</div>
        <div class="progress" v-if="skill.level">
          <div
            class="progress__inner setting--primary-background"
            :style="{width: skill.level+'%'}"
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