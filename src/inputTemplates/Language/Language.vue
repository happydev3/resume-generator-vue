<template>
  <TemplateContainer @delete="$emit('delete')">
    <template v-slot:header>
      <div class="col">
        <div class="row text-bold">
          <span class="mr-10">{{value.name || "(Not Specified)"}}</span>
        </div>
        <div class="row text-light" v-if="value.level">{{optionsMap[value.level]}}</div>
      </div>
    </template>

    <template v-slot:body>
      <div class="row">
        <div class="col">
          <TextInput @change="emitVal" label="Skill" v-model="value.name"></TextInput>
        </div>
        <div class="col">
          <TextInput
            @change="emitVal"
            :options="optionsMap"
            placeholder="eg. Novice, Beginner, Expert"
            label="Level"
            v-model="value.level"
          ></TextInput>
        </div>
      </div>
    </template>
  </TemplateContainer>
</template>

<script>
import TemplateContainer from "@/components/TemplateContainer/TemplateContainer.vue";
import TextInput from "@/components/TextInput/TextInput.vue";
import common from "../common";

export default {
  name: "LanguageTemplate",
  components: {
    TemplateContainer,
    TextInput
  },
  mixins: [common],
  data() {
    return {
      value: {
        name: "",
        level: ""
      },
      optionsMap: {
        0: "None",
        20: "Novice",
        40: "Beginner",
        60: "Skillful",
        80: "Experienced",
        100: "Expert"
      }
    };
  },
  props: ["propValue"],
  watch: {
    propValue() {
      this.value = this.propValue;
    }
  },
  methods: {
    emitVal() {
      this.$emit("change", this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>