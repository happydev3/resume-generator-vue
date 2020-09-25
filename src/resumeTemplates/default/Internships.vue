<template>
  <div class="section">
    <div class="section__title">
      <div class="section__icon">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BPHBhdGggZD0iTTQgNHYtLjVBMS41IDEuNSAwIDAgMSA1LjUgMmgxQTEuNSAxLjUgMCAwIDEgOCAzLjVWNGgxYTEgMSAwIDAgMSAxIDF2NGExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVY1YTEgMSAwIDAgMSAxLTFoMXptMSAwaDJ2LS41YS41LjUgMCAwIDAtLjUtLjVoLTFhLjUuNSAwIDAgMC0uNS41VjR6IiBmaWxsPSIjMEYxNDFGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4%3D"
          alt
        />
      </div>Internships
    </div>
    <div
      v-for="internship of data"
      :key="JSON.stringify(internship)"
      class="section__item"
      style="page-break-inside: avoid;"
    >
      <div class="section__item-title">
        {{internship.jobTitle}}
        <span v-if="internship.city">, {{internship.city}}</span>
      </div>
      <div class="section__item-subtitle">
        {{internship.startDate}}
        <span
          v-if="internship.endDate"
        >&nbsp;&nbsp;–&nbsp;&nbsp;{{internship.endDate}}</span>
      </div>
      <div class="section__item-text" v-html="internship.description"></div>
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