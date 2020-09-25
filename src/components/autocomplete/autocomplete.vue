<template>
    <div :class="classPrefix" class="auto" @mousedown="mousefocus = true" @mouseout="mousefocus = false">
        <input type="text" @blur="focused = false" @focus="focused = true"
            v-model="search" :placeholder="placeholder" :class="inputClass"
            @keydown.down.prevent.stop="moveDown()"
            @keydown.up.prevent.stop="moveUp()"
            @keydown.enter.prevent.stop="select(selectedIndex)"
            @keydown.tab="mousefocus = false"
            ref="input"
            value="value"
            :required="required">
        <div v-if="showSuggestions" :class="classPrefix + '__suggestions'">
            <div v-for="(entry, index) in filteredEntries"
                @click="select(index)"
                :class="[classPrefix + '__entry', selectedClass(index)]">
                {{ entry[property] }}
            </div>
        </div>
        <div class="border" :class="{active: focused}"></div>
    </div>
</template>

<script>

export default {
  name: "autocomplete",
  data() {
    return {
      entries: [],
      search: "",
      focused: false,
      mousefocus: false,
      selectedIndex: 0
    };
  },
  computed: {
    filteredEntries() {
      if (this.search.length <= this.threshold) {
        return [];
      } else {
        return this.entries.filter(entry => {
          if (this.ignoreCase) {
            return (
              entry[this.property]
                .toLowerCase()
                .indexOf(this.search.toLowerCase()) > -1
            );
          }
          return entry[this.property].indexOf(this.search) > -1;
        });
      }
    },
    hasSuggestions() {
      if (this.search.length <= this.threshold) {
        return false;
      }

      return this.filteredEntries.length > 0;
    },
    showSuggestions() {
      if (!this.hasSuggestions) {
        return false;
      }

      if (this.focused || this.mousefocus) {
        return true;
      }

      return false;
    }
  },
  created() {
    this.search = this.value;
    if (this.list !== undefined) {
      this.setEntries(this.list);
    } else if (this.url !== undefined && this.requestType !== undefined) {
      this.getListAjax();
    }
  },
  methods: {
    select(index) {
      if (this.hasSuggestions) {
        this.search = this.filteredEntries[index][this.property];
        this.$emit("autocomplete-select", this.search);
        this.$emit("selected", this.search);

        if (this.autoHide) {
          this.mousefocus = false;
          this.focused = false;
          this.$refs.input.blur();
        } else {
          this.$nextTick(() => {
            this.$refs.input.focus();
          });
        }
      }
    },
    setEntries(list) {
      this.entries = list;
    },
    moveUp() {
      if (this.selectedIndex - 1 < 0) {
        this.selectedIndex = this.filteredEntries.length - 1;
      } else {
        this.selectedIndex -= 1;
      }
    },
    moveDown() {
      if (this.selectedIndex + 1 > this.filteredEntries.length - 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex += 1;
      }
    },
    selectedClass(index) {
      if (index === this.selectedIndex) {
        return this.classPrefix + "__selected";
      }

      return "";
    },
    getListAjax() {
      return this.$http[this.requestType](this.url).then(response => {
        this.setEntries(response.data);
      });
    }
  },
  props: {
    classPrefix: {
      type: String,
      required: false,
      default: "autocomplete"
    },
    url: {
      type: String,
      required: false
    },
    requestType: {
      type: String,
      required: false,
      default: "get"
    },
    list: {
      type: Array,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    property: {
      type: String,
      required: false,
      default: "name"
    },
    inputClass: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    ignoreCase: {
      type: Boolean,
      required: false,
      default: true
    },
    threshold: {
      type: Number,
      required: false,
      default: 0
    },
    value: {
      required: false,
      default: ""
    },
    autoHide: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  watch: {
    filteredEntries(value) {
      if (this.selectedIndex > value.length - 1) {
        this.selectedIndex = 0;
      }
    },
    search(value) {
      this.$emit("input", value);
    },
    value(newValue) {
      this.search = newValue;
    }
  }
};
</script>
<style lang="scss" scoped>

    .autocomplete {
        position: relative;

        input {
            width: 100%;
            display: block;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            caret-color: #D3001D;
            background-color: rgb(242, 245, 250);
            color: rgb(38, 43, 51);
            pointer-events: unset;
            font-size: 16px;
            border-radius: 3px;
            padding: 15px 16px;
            outline: none;
            border-width: 0px;
            border-style: initial;
            border-color: #D3001D;
            border-image: initial;
            transition: color 0.1s ease 0s;
        }
    }

    .autocomplete__suggestions {
        position: absolute;
        top: 100%;
        background-color: rgb(242, 245, 250);;
        width: 100%;
        z-index: 2;
        padding: 6px 0px;

        &:hover .autocomplete__entry:not(:hover) {
            color:black;
            background-color: transparent;
        }
    }
    
    .autocomplete__selected {
        color: rgb(33, 150, 243);
        background-color: rgba(204, 232, 255, 0.5);
    }

    .autocomplete__entry {
        padding: 6px 16px;
        &:hover {
            background-color: rgba(204, 232, 255, 0.5);
            color: rgb(33, 150, 243);
            cursor: pointer;
        }
    }

    .border {
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      height: 2px;
      background-color: rgb(33, 150, 243);
      pointer-events: none;
      opacity: 0;
      transform: scaleX(0);
      transition: all 0.3s ease;
      border-radius: 0px 0px 2px 2px;
      &.active {
        opacity: 1;
        transform: scaleX(1);
        border: 1px solid rgb(33, 150, 243) !important;
      }
    }

</style>