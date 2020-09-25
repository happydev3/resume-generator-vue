<template>
  <TemplateContainer @delete="$emit('delete')">
    <template v-slot:header>
      <div class="col">
        <div class="row text-bold">
          <span class="mr-10">{{value.activity || "(Not Specified)"}}</span>
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
          <TextInput
            @change="emitVal"
            label="Aсtivity name, job title, book title etc."
            v-model="value.activity"
          ></TextInput>
        </div>
        <div class="col">
          <TextInput @change="emitVal" label="City" v-model="value.city"></TextInput>
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
      <div class="row">
        <div class='col'>
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
  name: "CustomTemplate",
  components: {
    TemplateContainer,
    TextInput,
    RichEditor
  },
  data() {
    return {
      value: {
        activity: null,
        startDate: null,
        endDate: null,
        city: null,
        description: null
      }
    };
  },
  mixins: [common],
  methods: {
    emitVal() {
      this.$emit("change", this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>