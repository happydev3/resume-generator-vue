<template>
  <div class="section">
    <div class="section__title">
      <div class="section__icon">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiI%2BPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyA0aDEuNXY1LjFhLjQuNCAwIDAgMS0uNC40aC0uN2EuNC40IDAgMCAxLS40LS40VjdjLTEuMzMzIDAtMi0uNS0yLTEuNVMxLjY2NyA0IDMgNHptNi40NDYtMS43N0EuNC40IDAgMCAxIDEwIDIuNnY1LjhhLjQuNCAwIDAgMS0uNTU0LjM3TDUuMiA3VjRsNC4yNDYtMS43N3oiLz48L3N2Zz4%3D"
          alt
        />
      </div>References
    </div>
    <div v-for="ref in data" :key="JSON.stringify(ref)+Math.random()" class="section__item">
      <div class="section__item-title">
        {{ref.fullName}}
        <span v-if="ref.company">from {{ref.company}}</span>
      </div>
      <div class="section__item-contacts">
        <span class="section__item-email setting--primary-text">{{ref.email}}</span>
        <div class="section__item-divider" v-if="ref.phone && ref.email">&nbsp;·&nbsp;</div>
        <span class="section__item-email">{{ref.phone}}</span>
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