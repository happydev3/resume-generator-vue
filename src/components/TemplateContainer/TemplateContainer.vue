<template>
  <div class="container">
    <div class="header" @click="expanded =!expanded">
      <slot name="header">(Not Specified)</slot>
      <div class="icons" @mouseover="hoverFlag=true" @mouseout="hoverFlag=false">
        <!-- <span @click.stop="showOptionsMenu=true">
          <Icon fill="rgba(0,0,0,0.3)" type="dots" />
        </span> -->

        <Icon
          :containerStyles="expanded ? 'transform:rotate(-90deg)' :'transform:rotate(90deg)'"
          :fill="hoverFlag? '#D3001D' : 'rgba(0,0,0,0.3)'"
          type="angle"
        />
      </div>
    </div>
    <transition name="fades">
      <div class="body" v-if="expanded">
        <slot name="body"></slot>
      </div>
    </transition>
    <div class="options-bg" :class="{active: showOptionsMenu}" @click="showOptionsMenu=false"></div>
    <ul class="options-menu" :class="{active: showOptionsMenu}">
      <li @click="showOptionsMenu=false;$emit('delete')">
        <Icon fill="white" type="delete" />
        <div class="less-space"></div>Delete
      </li>
      <li @click="expanded=true;showOptionsMenu=false;">
        <div class="space"></div>Expand
      </li>
      <li @click="showOptionsMenu=false">
        <div class="space"></div>Cancel
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";

export default {
  name: "TemplateContainer",
  data() {
    return {
      expanded: false,
      showOptionsMenu: false,
      hoverFlag: false
    };
  },
  mounted() {},
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 15px 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  user-select: none;

  .header {
    display: flex;
    cursor: pointer;
    font-size: 15px;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0;
    &.light {
      opacity: 0.5;
    }

    &:hover {
      color: #D3001D;
    }
    .icons {
      display: flex;
      justify-content: space-between;
      margin-left: auto;
      svg {
        cursor: pointer;
      }
    }
  }
  .body {
    margin-top: 20px;
  }
}
.options-bg {
  background: #000;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  z-index: 1000;
  &.active {
    opacity: 0.3;
    pointer-events: unset;
  }
}

.options-menu {
  position: fixed;
  left: 0;
  bottom: 0;
  transform: translateY(150px);
  transition: transform 0.3s ease;
  list-style: none;
  background: #333;
  margin: 0;
  opacity: 0;
  height: 0;
  overflow: hidden;
  padding: 10px 0;
  width: 100%;
  z-index: 1001;
  .space {
    width: 35px;
  }
  .less-space {
    width: 10px;
  }
  &.active {
    transform: translateY(0);
    opacity: 1;
    height: auto;
  }
  li {
    align-items: center;
    padding: 20px;
    display: flex;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>