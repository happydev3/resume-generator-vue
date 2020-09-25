<template>
  <div class="tooltip-container">
    <div class="tooltip-area" :class="{active}">{{text}}</div>
    <span class="triangle" :class="{active}"></span>
    <Icon
      @mouseenter="active= true"
      @mouseleave="active= false"
      fill="#D3001D"
      width="16"
      type="help"
    />
  </div>
</template>

<script>
import Icon from "../Icon/Icon.vue";

export default {
  name: "Tooltip",
  props: ["text"],
  data() {
    return {
      active: false
    };
  },
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
.tooltip-container {
  cursor: pointer;
  display: flex;
  position: relative;
  .tooltip-area {
    position: absolute;
    bottom: 30px;
    background: #333;
    padding: 7px;
    border-radius: 5px;
    left: -80px;
    font-size: 12px;
    pointer-events: none;
    opacity: 0;
    line-height: 14px;
    width: 170px;
    color: #fff;
    transition: all 0.3s ease;
    z-index: 10000;
    &.active {
      pointer-events: unset;
      opacity: 1;
    }
  }
  .triangle {
    position: absolute;
    bottom: 20px;
    width: 0;
    pointer-events: none;
    opacity: 0;
    left: 0px;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #333;
    transition: all 0.3s ease;
    &.active {
      pointer-events: unset;
      opacity: 1;
    }
  }
}
</style>