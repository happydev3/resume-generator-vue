<template>
  <TemplateContainer @delete="$emit('delete')">
    <template v-slot:header>
      <div class="col">
        <div class="text-bold">
          <span class="mr-10">{{value.degree || "(Not Specified)"}}</span>
          <span v-if="value.school">at {{value.school}}</span>
        </div>
        <div
          class="text-light"
          v-if="value.startDate || value.endDate"
        >{{value.startDate}} to {{value.endDate}}</div>
      </div>
    </template>

    <template v-slot:body>
      <div class="row">
        <div class="col">
          <TextInput @change="emitVal" label="School" v-model="value.school"></TextInput>
        </div>
        <div class="col">
          <TextInput @change="emitVal" label="Degree" v-model="value.degree"></TextInput>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TextInput @change="emitVal" :date="true" label="Start Date" format="MMM DD, YYYY" v-model="value.startDate"></TextInput>
        </div>
        <div class="col">
          <TextInput @change="emitVal" :date="true" label="End Date"  format="MMM DD, YYYY" v-model="value.endDate"></TextInput>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TextInput @change="emitVal" label="City" v-model="value.city"></TextInput>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <RichEditor @change="emitVal" label="Description" v-model="value.description"></RichEditor>
        </div>
      </div>
    </template>
  </TemplateContainer>
</template>

<script>
import TemplateContainer from "@/components/TemplateContainer/TemplateContainer.vue";
import TextInput from "@/components/TextInput/TextInput.vue";
import RichEditor from "@/components/RichEditor/RichEditor.vue";
import common from "../common";

export default {
  name: "EducationTemplate",
  mixins: [common],
  components: {
    TemplateContainer,
    TextInput,
    RichEditor
  },
  data() {
    return {
      value: {
        school: null,
        degree: null,
        startDate: null,
        endDate: null,
        city: null,
        description: null
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