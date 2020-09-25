<template>
  <TemplateContainer @delete="$emit('delete')">
    <template v-slot:header>
      <div class="col">
        <div class="row text-bold">
          <span class="mr-10">{{value.courseName || "(Not Specified)"}}</span>
          <span v-if="value.institution">at {{value.institution}}</span>
        </div>
        <div
          class="row text-light"
          v-if="value.startDate || value.endDate"
        >{{value.startDate}} to {{value.endDate}}</div>
      </div>
    </template>

    <template v-slot:body>
      <div class="row">
        <div class="col">
          <TextInput @change="emitVal" label="Course" v-model="value.courseName"></TextInput>
        </div>
        <div class="col">
          <TextInput @change="emitVal" label="Institution" v-model="value.institution"></TextInput>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TextInput @change="emitVal" :date="true" label="Start Date" v-model="value.startDate"></TextInput>
        </div>
        <div class="col">
          <TextInput @change="emitVal" :date="true" label="End Date" v-model="value.endDate"></TextInput>
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
  name: "CourseTemplate",
  components: {
    TemplateContainer,
    TextInput
  },
  mixins: [common],
  props: ["propValue"],
  watch: {
    propValue() {
      this.value = this.propValue;
    }
  },
  data() {
    return {
      value: {
        courseName: "",
        institution: "",
        startDate: null,
        endDate: null
      }
    };
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