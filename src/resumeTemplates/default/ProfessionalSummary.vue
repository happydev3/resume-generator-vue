<template>
  <div class="section" v-if="data">
    <div class="section__title">
      <div class="section__icon">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiI%2BPHBhdGggZmlsbD0iIzBGMTQxRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOSAxMEgzYy0uMzMzLTIuNC42NjctMy42IDMtMy42UzkuMzMzIDcuNiA5IDEwek02IDUuNWEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6Ii8%2BPC9zdmc%2B"
          alt
        />
      </div>Profiles
    </div>
    <div class="section__item">
      <div class="section__item-text" v-html="data"></div>
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