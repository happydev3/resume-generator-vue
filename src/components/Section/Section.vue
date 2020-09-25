<template>
  <section class="section">
    <h1 class="header" v-if="!editingTitle">
      <span
        v-if="draggable"
        class="icon-container drag-icon"
        @mouseenter="canDrag=true"
        @mouseleave="canDrag=false"
      >
        <Icon type="drag" fill="#ccc"></Icon>
      </span>
      {{ currentTitle }}
      <span
        class="icon-container"
        v-if="titleEditable"
        @click="editingTitle = true;"
      >
        <Icon type="edit" fill="#D3001D"></Icon>
      </span>
      <span class="icon-container" v-if="deletable" @click="$emit('delete')">
        <Icon type="delete" fill="#D3001D"></Icon>
      </span>
    </h1>
    <input
      @keyup.enter="editingTitle = false"
      @input="updateTitle"
      v-else
      ref="input"
      type="text"
      class="input"
      v-model="currentTitle"
    />
    <p class="s-description" v-if="description">{{description}}</p>
    <div class="slots-container">
      <slot />
      <slot v-if="showCollapsedContent" name="collpased" />
    </div>
    <button
      class="link"
      @click="showCollapsedContent= true"
      v-if="$slots.collpased && !showCollapsedContent "
    >
      Edit additional details
      <Icon type="angle" containerStyles="transform:rotate(90deg)" />
    </button>
    <button
      class="link"
      @click="showCollapsedContent= false"
      v-if="$slots.collpased && showCollapsedContent "
    >
      Hide additional details
      <Icon type="angle" containerStyles="transform:rotate(-90deg)" />
    </button>
  </section>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";

export default {
  name: "Section",
  props: ["title", "description", "titleEditable", "deletable", "section", "draggable"],
  components: {
    Icon
  },
  
  mounted() {
    this.currentTitle = this.title;
  },
  methods: {
    updateTitle(e) {
      if (e.target.value) {
        this.$emit("changeTitle", e.target.value);
      }
    }
  },
  data() {
    return {
      canDrag: true,
      editingTitle: false,
      showCollapsedContent: false,
      currentTitle: null
    };
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 10px 20px;
  background: #fff;
  border-radius: 5px;
  display: block;
}
.s-description {
  font-size: 14px;
  color: #98a1b3;
}
.input {
  border: none;
  font-size: 18px;
  letter-spacing: 0.7px;
  line-height: 28px;
  font-weight: 600;
  margin-bottom: 12px;
  border-bottom: 2px solid #D3001D;
}
.icon-container {

  display: inline-flex;
  transform: translateY(3px);
  cursor: pointer;
}
.header {
  .drag-icon {
    margin-left: -25px;
    margin-right: -5px;
  }
  .icon-container {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  &:hover {
    .icon-container {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>