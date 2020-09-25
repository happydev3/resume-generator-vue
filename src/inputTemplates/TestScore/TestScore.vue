<template>
  <TemplateContainer @delete="$emit('delete')">
    <template v-slot:header>
      <div class="col">
        <div class="row text-bold">
          <span class="mr-10">{{value.name || "(Not Specified)"}}</span>
        </div>
        <div class="row text-light" v-if="value.score">{{value.score}}</div>
      </div>
    </template>

    <template v-slot:body>
      <div class="row">
        <div class="col">
          <TextInput @change="emitVal" label="Test name" v-model="value.name"></TextInput>
        </div>
        <div class="col">
          <TextInput @change="emitVal" type="number" label="Test score" v-model="value.score"></TextInput>
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
  name: "TestScoreTemplate",
  components: {
    TemplateContainer,
    TextInput
  },
  mixins: [common],
  data() {
    return {
      value: {
        name: "",
        score: ""
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