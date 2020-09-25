<template>
  <div style="width:100%">
    <span class="label" v-if="label">{{label}}</span>
    <div class="editor-container" @click="focusEditor">
      <editor-menu-bar
        class="menubar"
        :editor="editor"
        v-slot="{ commands, isActive, getMarkAttrs }"
      >
        <div class="menubar">
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <icon fill="rgba(0,0,0,0.8)" type="bold" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <icon fill="rgba(0,0,0,0.8)" type="italic" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <icon fill="rgba(0,0,0,0.8)" type="underline" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <icon fill="rgba(0,0,0,0.8)" type="strike" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <icon fill="rgba(0,0,0,0.8)" type="ul" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <icon fill="rgba(0,0,0,0.8)" type="ol" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.link() }"
            @click="setLinkUrl(commands.link, getMarkAttrs('link').href)"
          >
            <icon fill="rgba(0,0,0,0.8)" type="link" />
          </button>
        </div>
      </editor-menu-bar>
      <editor-content :id="id" class="editor__content" :editor="editor"></editor-content>
      <div class="border" :class="{active: isFocused}"></div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  OrderedList,
  BulletList,
  ListItem,
  Bold,
  Italic,
  Link,
  Strike,
  Underline,
  Placeholder
} from "tiptap-extensions";

let TIMER;

export default {
  name: "RichEditor",
  components: {
    EditorContent,
    EditorMenuBar,
    Icon
  },
  props: ["label", "value"],
  // watch: {
  //   value(newValue) {
  //     this.editor.setContent(newValue);
  //   }
  // },

  methods: {
    setLinkUrl(command, existingUrl = "https://") {
      let result = true;
      const url = prompt("Enter URL:", existingUrl);
      if (!url) {
        result = confirm("Do you want to remove the link?");
      }
      if (result) {
        command({
          href: url
        });
      }
    },
    focusEditor() {
      setTimeout(
        function() {
          this.textInput.focus();
        }.bind(this),
        0
      );
    },
    getUrl() {
      prompt("Enter url", "http://");
    }
  },
  mounted() {
    this.id = "id_" + Math.floor(Math.random() * 100000);
    setTimeout(() => {
      const el = document.querySelector("#" + this.id);
      this.textInput = el.firstElementChild;
      this.textInput.addEventListener("focus", () => (this.isFocused = true));
      this.textInput.addEventListener("blur", () => (this.isFocused = false));
      if (this.value) {
        this.editor.setContent(this.value);
      }
    }, 10);
  },
  data() {
    return {
      id: null,
      textInput: null,
      isFocused: false,
      editor: new Editor({
        onUpdate: ({ getHTML }) => {
          clearTimeout(TIMER);
          TIMER = setTimeout(
            function() {
              const state = getHTML();
              this.$emit("input", state);
              this.$emit("change", state);
            }.bind(this),
            0
          );
        },
        extensions: [
          new BulletList(),
          new ListItem(),
          new OrderedList(),
          new Link(),
          new Bold(),
          new Italic(),
          new Strike(),
          new Underline(),
          new Placeholder({
            emptyNodeClass: "is-empty",
            emptyNodeText: "Write something …",
            showOnlyWhenEditable: true
          })
        ]
      })
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>

<style lang="scss" scoped>
.editor-container {
  background: rgb(242, 245, 250);
  padding: 10px;
  min-height: 200px;
  position: relative;
}
.menubar {
  display: flex;
  button {
    padding: 0;
    margin: 5px;
    opacity: 0.5;
    background: transparent;
    border: none;
    cursor: pointer;
    &.is-active {
      opacity: 1;
    }
  }
}
.editor p.is-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}

.editor__content {
  padding: 0 10px;
}
.border {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 2px;
  width: 100%;
  background-color: #D3001D;
  pointer-events: none;
  opacity: 0;
  transform: scaleX(0);
  transition: all 0.3s ease;
  border-radius: 0px 0px 2px 2px;
  &.active {
    opacity: 1;
    transform: scaleX(1);
  }
}
.label {
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: rgb(152, 161, 179);
  margin-bottom: 6px;
}
</style>