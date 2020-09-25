<template>
  <div class="input-container">
    <span class="label">
      <span class="label-text">{{label}}</span>
      <Tooltip v-if="tooltip" :text="tooltip" />
    </span>

    <div class="skill_list" v-bind:class="buttonVariant">
      <label
        v-for="option in Object.entries(options)"
        :key="option[0]"
        class="skill_label"
        v-bind:class="buttonVariant"
      >
      <input type="radio" :value="option[1].value" @change="changeValue" v-model="selected" v-bind:class="buttonVariant">  
      </label>
      <div class="active_label" v-bind:class="buttonVariant" v-bind:style="{transform: 'translateX(' + ((this.selected/20-1) * 100) + '%)'}"></div>
    </div>   

  </div>
</template>

<script>
import Tooltip from "../Tooltip/Tooltip.vue";

export default {
  name: "RadioGroup",
  props: [
    "value",
    "placeholder",
    "onChange",
    "label",
    "tooltip",
    "type",
    "options",
    "date",
  ],
  components: {
    Tooltip
  },
  data() {
    return {
      isFocused: false,
      selected: 20,
      buttonVariant :'outline-danger',
    };
  },
  computed:{
    calPosition(){
      
      return {
        
      }
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
      this.$emit("change", e.target.value);
    },
    changeValue(){
      // alert(this.selected);
      switch(this.selected){
        case 20:
          this.buttonVariant = "outline-danger";
          break;
        case 40:
          this.buttonVariant = "outline-warning";
          break;
        case 60:
          this.buttonVariant = "outline-info";
          break;
        case 80:
          this.buttonVariant = "outline-primary";
          break;
        case 100:
          this.buttonVariant = "outline-success";
          break;

      }
      this.$emit("input", this.selected);
      this.$emit("change", this.selected)
    },
    handleEvent(){
      // alert(this.value, "asdf");return;
      switch(this.selected){
        case 20:
          this.buttonVariant = "outline-danger";
          break;
        case 40:
          this.buttonVariant = "outline-warning";
          break;
        case 60:
          this.buttonVariant = "outline-info";
          break;
        case 80:
          this.buttonVariant = "outline-primary";
          break;
        case 100:
          this.buttonVariant = "outline-success1";
          break;
      }
      this.$emit("input", this.selected);
      this.$emit("change", this.selected)
    }
  }
};
</script>  

<style lang="scss" scoped>
.skill_list{
    display: flex;
    position: relative;
    height: 54px;
    // opacity: 0.1;
    transform: translateZ(0px);
    pointer-events: auto;
    overflow: hidden;
    border-radius: 4px;
    transition: background-color 0.2s ease 0s;
    &.outline-danger{
      background-color: rgba(255, 89, 89, 0.1);
    }
    &.outline-warning{
      background-color: rgba(255, 145, 89, 0.1);
    }
    &.outline-info{
      background-color: rgba(243, 183, 33, 0.1);
    }
    &.outline-primary{
      background-color: rgba(128, 204, 20, 0.1);
    }
    &.outline-success{
      background-color: rgba(37, 184, 105, 0.1);
    }
    .skill_label{
      display: inline-block;
      position: relative;
      -webkit-box-flex: 1;
      flex-grow: 1;
      margin-bottom: 0px;
      cursor: pointer;
      input{
            position: absolute;
        top: 0px;
        left: 0px;
        opacity: 0;
        pointer-events: none;
      }
      &.outline-danger{
        &::before{
          background-color: rgb(255, 89, 89);
        }

        &::after{
          background-color: rgb(255, 89, 89);
        }
      }
      &.outline-warning{
        &::before{
          background-color: rgba(255, 145, 89, 1);
        }

        &::after{
          background-color: rgba(255, 145, 89, 1);
        }
      }
      &.outline-info{
        &::before{
          background-color: rgba(243, 183, 33, 1);
        }

        &::after{
          background-color: rgba(243, 183, 33, 1);
        }
      }
      &.outline-primary{
        &::before{
          background-color: rgba(128, 204, 20, 1);
        }

        &::after{
          background-color: rgba(128, 204, 20, 1);
        }
      }
      &.outline-success{
        &::before{
          background-color: rgba(37, 184, 105, 1);
        }

        &::after{
          background-color: rgba(37, 184, 105, 1);
        }
      }
      &::before{
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        right: -1px;
        height: 100%;
        opacity: 0;
        transition: opacity 0.1s ease 0s;
        border-radius: 4px;
      }

      &:hover::before{
        opacity: 0.4;
      }
      
      &:not(:first-child)::after{
        content: "";
        position: absolute;
        left: 0px;
        top: 50%;
        width: 1px;
        height: 14px;
        margin-top: -7px;
        opacity: 0.4;
      }
    }
    .active_label{
          position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width:20%;
    will-change: transform, opacity;
    opacity: 1;
    transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
    &.outline-danger{
        &::before{
          background-color: rgb(255, 89, 89);
        }
    }
    &.outline-warning{
        &::before{
          background-color: rgba(255, 145, 89, 1);
        }
    }
    &.outline-info{
        &::before{
          background-color: rgba(243, 183, 33, 1);
        }
    }
    &.outline-primary{
        &::before{
          background-color: rgba(128, 204, 20, 1);
        }
    }
    &.outline-success{
        &::before{
          background-color: rgba(37, 184, 105, 1);
        }
    }
    &::before{
          content: "";
          position: absolute;
          left: -3px;
          right: -3px;
          top: 0px;
          height: 100%;
          border-radius: 4px;
          transition: background-color 0.2s ease 0s;
      }
    }

}

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
  .input {
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