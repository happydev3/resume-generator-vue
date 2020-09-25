<template>
  <TemplateContainer @delete="$emit('delete')">
    <template v-slot:header>
      <div class="col">
        <div class="row text-bold">
          <span class="mr-10">{{value.fullName || "(Not Specified)"}}</span>
        </div>
        <div class="row text-light" v-if="value.company">{{value.company}}</div>
      </div>
    </template>

    <template v-slot:body>
      <div class="row">
        <div class="col">
          <TextInput @change="emitVal" label="Full Name" v-model="value.fullName"></TextInput>
        </div>
        <div class="col">
          <TextInput @change="emitVal" label="Company" v-model="value.company"></TextInput>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TextInput @change="emitVal" type="phone" label="Phone" v-model="value.phone"></TextInput>
        </div>
        <div class="col">
          <TextInput @change="emitVal" type="email" label="Email" v-model="value.email"></TextInput>
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
  name: "ReferenceTemplate",
  components: {
    TemplateContainer,
    TextInput
  },
  mixins: [common],
  data() {
    return {
      value: {
        fullName: null,
        company: null,
        phone: null,
        email: null
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