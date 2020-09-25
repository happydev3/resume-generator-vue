<template>
  <div class="section">
    <div class="section__title">
      <div class="section__icon">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiI%2BPHBhdGggZmlsbD0iIzBGMTQxRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuODIxIDQuNDFsLjEyNC4wNjJhLjEuMSAwIDAgMSAuMDU1LjA5VjcuNGEuMS4xIDAgMCAxLS4xLjFoLS44YS4xLjEgMCAwIDEtLjEtLjFWNUw2LjA5IDYuOTU1YS4yLjIgMCAwIDEtLjE4IDBMMS4xOCA0LjU5YS4xLjEgMCAwIDEgMC0uMTc4TDUuOTEgMi4wNDVhLjIuMiAwIDAgMSAuMTc4IDBsNC43MzIgMi4zNjZ6TTYgOGwyLjg1NS0xLjQyOGEuMS4xIDAgMCAxIC4xNDUuMDl2MS43NzZhLjEuMSAwIDAgMS0uMDU1LjA5bC0yLjkgMS40NWEuMS4xIDAgMCAxLS4wOSAwbC0yLjktMS40NUEuMS4xIDAgMCAxIDMgOC40MzhWNi42NjJhLjEuMSAwIDAgMSAuMTQ1LS4wOUw2IDh6Ii8%2BPC9zdmc%2B"
          alt
        />
      </div>Courses
    </div>
    <div
      v-for="education in data"
      :key="JSON.stringify(education)"
      class="section__item"
      style="page-break-inside: avoid;"
    >
      <div class="section__item-title">
        {{education.courseName}}
        <span v-if="education.institution">, {{education.institution}}</span>
      </div>
      <div class="section__item-subtitle">
        {{education.startDate}}
        <span
          v-if="education.endDate"
        >&nbsp;&nbsp;–&nbsp;&nbsp;{{education.endDate}}</span>
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