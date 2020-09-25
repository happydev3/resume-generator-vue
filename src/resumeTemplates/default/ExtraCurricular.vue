<template>
  <div class="section">
    <div class="section__title">
      <div class="section__icon">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BPHBhdGggZD0iTTEgMmMwIDEuNS41IDQuNDAzIDQgNC41VjEwaDFWN2MyLjUuNDAzIDQtMSA0LTMtMS41LS41OTctNCAwLTQuNSAxLjVDNS41IDMuNSA0IDIgMSAyeiIgZmlsbD0iIzBGMTQxRiIgZmlsbC1ydWxlPSJldmVub2RkIi8%2BPC9zdmc%2B"
          alt
        />
      </div>Extra-curricular activities
    </div>
    <div
      v-for="activity of data"
      :key="JSON.stringify(activity)"
      class="section__item"
      style="page-break-inside: avoid;"
    >
      <div class="section__item-title">
        {{ activity.function }}
        <span v-if="activity.city">, {{activity.city}}</span>
      </div>
      <div class="section__item-subtitle">
        {{activity.startDate}}
        <span
          v-if="activity.endDate"
        >&nbsp;&nbsp;–&nbsp;&nbsp;{{activity.endDate}}</span>
      </div>
      <div class="section__item-text" v-html="activity.description"></div>
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