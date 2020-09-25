<template>
  <div class="section-t-container">
    <Section
      @delete="$emit('delete')"
      @changeTitle="changeTitle"
      :draggable="draggable"
      :deletable="deletable"
      :titleEditable="titleEditable"
      :title="title"
      :description="description"
    >
      <SlickList v-model="values" :useDragHandle="true" @sort-end="onSortEnd($event)">
        <SlickItem  class="list-item" v-for="(value, i) in values" :index="i" :key="i" :data="i">
          <span
            v-if="draggable"
            class="handle icon-container drag-icon"
            v-handle
          ><Icon type="drag" fill="#ccc"></Icon></span>
          <div  :key="i" class="template-input-container">
            <div class="component-wrapper">
              <component
                @delete="onRequestDelete(i)"
                @change="updateValue(i, $event)"
                :initialValues="value"
                :propValue="value"
                :is="inputComponent"
              />
            </div>
            <div class="icon" @click="onRequestDelete(i)">
              <Icon type="delete" fill="#D3001D"/>
            </div>
          </div>
        </SlickItem >
      </SlickList>
      <div class="link-row" @click="addNew">
        <button class="link">+ Add more</button>
      </div>
    </Section>

    <div class="delete-bg" v-if="showDeleteConfirmation">
      <div class="delete-modal" v-if="showDeleteConfirmation">
        <div class="delete-header">
          <h2 style="margin:0">Delete Entry</h2>
          <p>Are you sure you want to delete this entry?</p>
        </div>
        <div class="bottom">
          <input type="checkbox" @input="setDeleteConfirmationFlag" />&nbsp; Don't ask again
          <div class="btn-group">
            <button class="btn-blue white" @click="deleteItem">Delete</button>
            <button class="btn-red" @click="showDeleteConfirmation= false">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Section from "@/components/Section/Section.vue";
import Icon from "@/components/Icon/Icon.vue";
import { SlickList, SlickItem, ContainerMixin, ElementMixin, HandleDirective  } from 'vue-slicksort';

export default {
  name: "TemplateSection",
  props: [
    "title",
    "inputComponent",
    "description",
    "titleEditable",
    "deletable",
    "initialValues",
    "section",
    "draggable",
    "value"
  ],
  mixins: [ContainerMixin],
  directives: { handle: HandleDirective },
  components: {
    Section,
    Icon,
    SlickItem,
    SlickList
  },
  data() {
    return {
      selectedForDelete: null,
      showDeleteConfirmation: false,
      values: []
    };
  },
  mounted() {
    if (this.initialValues) {
      this.values = this.initialValues;
    } else {
      // const initialData = this.inputComponent.data().value;
      // this.values.push(initialData);
      // this.$emit("change", [initialData]);
    }
    window.__bypassDeleteModal = false;
  },
  methods: {
    changeTitle(title) {
      this.$emit("changeTitle", title);
    },
    updateValue(index, data) {
      this.values[index] = data;
      this.$emit("change", this.values);
    },
    onRequestDelete(i) {
      this.selectedForDelete = i;
      if (window.__bypassDeleteModal) {
        this.deleteItem();
      } else {
        this.showDeleteConfirmation = true;
      }
    },
    deleteItem() {
      if (typeof this.selectedForDelete == "number") {
        this.values = this.values.filter(
          (_, index) => index !== this.selectedForDelete
        );
        this.selectedForDelete = null;
        this.showDeleteConfirmation = false;
        this.$emit("change", this.values);
      }
    },
    addNew() {
      const initialData = this.inputComponent.data().value;
      this.values.push(initialData);
      this.$emit("change", this.values);
    },
    setDeleteConfirmationFlag() {
      window.__bypassDeleteModal = !window.__bypassDeleteModal;
    },
    onSortEnd($event) {
    }
  }
};
</script>

<style lang="scss">
.template-input-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 20px;
  .component-wrapper {
    flex: 1;
  }
  .icon {
    justify-self: flex-end;
    margin-right: -30px;
    padding: 10px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  &:hover {
    .icon {
      opacity: 1;
      visibility: visible;
    }
  }
}
.link-row {
  padding: 10px 20px;
  display: block;
  margin-top: -5px;
  border-radius: 5px;
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(211, 211, 211, 0.5);
  }
  button {
    font-size: 14px;
  }
}
.delete-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  .delete-modal {
    min-width: 500px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 5px;
    .delete-header {
      margin-bottom: 40px;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span.check {
        cursor: pointer;
      }
      .btn-group {
        display: flex;
        margin-left: auto;
        button {
          margin-right: 10px;
        }
      }
    }
  }
}
.list-item{
  position: relative;
}
    
.handle {
    display: block;
    width: 18px;
    height: 18px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 10px;
    cursor: grab;
    transition: all 0.3s ease;
    position: absolute;
    top: 21px;
    .icon-container{
      visibility: hidden;
    }
    &:hover .icon-container{
      visibility: visible;
    }
}
</style>