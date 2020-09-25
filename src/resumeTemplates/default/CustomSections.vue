<template>
  <div>
    <div v-for="section in sections" :key="JSON.stringify(section)" class="section">
      <template v-if="section.value && section.value.length >0">
        <div class="section__title">
          <div class="section__icon">
            <img
              src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6TTkgMTdIN3YtN2gydjd6bTQgMGgtMlY3aDJ2MTB6bTQgMGgtMnYtNGgydjR6Ii8%2BPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg%3D%3D"
              alt
            />
          </div>
          {{ section.title }}
        </div>
        <div
          v-for="item in section.value"
          :key="JSON.stringify(item)"
          class="section__item"
          style="page-break-inside: avoid;"
        >
          <div class="section__item-title">{{item.activity}}</div>
          <div class="section__item-subtitle">
            {{ item.startDate }}
            <span v-if="item.endDate">&nbsp;&nbsp;–&nbsp;&nbsp;{{item.endDate}}</span>
            <div class="section__item-location">{{item.city}}</div>
          </div>
          <div class="section__item-text" v-html="item.description"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sections"]
};
</script>

<style>
</style>