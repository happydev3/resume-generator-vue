<template>
  <div class="input-container">
    <span class="label">
      <span class="label-text">{{label}}</span>
      <Tooltip v-if="tooltip" :text="tooltip" />
    </span>

    <input
      v-if="!options && !date && !autocomplete"
      class="input"
      :type="type || 'text'"
      :value="value"
      @focus="isFocused = true"
      @blur="isFocused= false"
      @input="handleInput"
      :placeholder="placeholder"
    />

    <autocomplete
      v-if="autocomplete"
      :list="list"
      :threshold="threshold || 1"
      @focus="console.log('focused');isFocused = true;"
      @blur="isFocused= false"
      @input="handleInputComplete"
      tabindex="0"
      :value="value"
      :placeholder="placeholder || ''"
    />

    <select
      v-if="options"
      class="input"
      @focus="focused = true"
      @blur="focused = false"
      @input="handleInput"
      :placeholder="placeholder"
    >
      <option
        v-for="option in Object.entries(options)"
        :key="option[0]"
        :value="option[0]"
      >{{ option[1] }}</option>
    </select>
    <date-picker
      lang="en"
      v-if="date"
      :value="value"
      @input="handleDate"
      :format="format"
      value-type="format"
      :type="type"
    ></date-picker>
    <div class="border" :class="{active: isFocused}"></div>
  </div>
</template>

<script>
import Tooltip from "../Tooltip/Tooltip.vue";
import DatePicker from "vue2-datepicker";
import autocomplete from "../autocomplete/autocomplete.vue";

export default {
  name: "TextInput",
  props: [
    "value",
    "placeholder",
    "onChange",
    "label",
    "tooltip",
    "type",
    "options",
    "autocomplete",
    "date",
    "format",
    "list",
    "threshold"
  ],
  components: {
    Tooltip,
    DatePicker,
    autocomplete
  },
  data() {
    return {
      isFocused: false,
      focused:false
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
      this.$emit("change", e.target.value);
    },
    handleInputComplete(e) {
      this.$emit("input", e);
      this.$emit("change", e);
    },
    handleDate(value) {
      this.$emit("input", value);
      this.$emit("change", value);
    }
  }
};
</script>  

<style lang="scss" scoped>
.input-container {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .label {
    font-size: 14px;
    display: flex;
    line-height: 20px;
    color: rgb(152, 161, 179);
    margin-bottom: 7px;
    .label-text {
      margin-right: 10px;
    }
  }
  .autocomplete input, input {
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
  .border {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 2px;
    background-color: #D3001D;
    pointer-events: none;
    opacity: 0;
    transform: scaleX(0);
    transition: all 0.3s ease;
    border-radius: 0px 0px 2px 2px;
    &.active {
      opacity: 1;
      transform: scaleX(1);
      border: 1px solid #D3001D !important;
    }
  }
}
</style>