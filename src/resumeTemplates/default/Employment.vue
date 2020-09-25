<template>
  <div class="section">
    <div class="section__title">
      <div class="section__icon">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BPHBhdGggZD0iTTQgNHYtLjVBMS41IDEuNSAwIDAgMSA1LjUgMmgxQTEuNSAxLjUgMCAwIDEgOCAzLjVWNGgxYTEgMSAwIDAgMSAxIDF2NGExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVY1YTEgMSAwIDAgMSAxLTFoMXptMSAwaDJ2LS41YS41LjUgMCAwIDAtLjUtLjVoLTFhLjUuNSAwIDAgMC0uNS41VjR6IiBmaWxsPSIjMEYxNDFGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4%3D"
          alt
        />
      </div>Employment History
    </div>

    <div
      v-for="item in data"
      :key="item.jobTitle+Math.random()"
      class="section__item"
      style="page-break-inside: avoid;"
    >
      <div class="section__item-title">
        {{item.jobTitle}}
        <span v-if="item.employer">at {{ item.employer }}</span>
        <span v-if="item.city">, {{item.city}}</span>
      </div>
      <div class="section__item-subtitle">
        {{item.startDate}}
        <span v-if="item.endDate">&nbsp;&nbsp;–&nbsp;&nbsp;</span>
        {{item.endDate}}
      </div>
      <div class="section__item-text" v-html="item.description"></div>
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