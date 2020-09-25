<template>
  <Section  :draggable="true" :deletable="true" @delete="$bus.$emit('deleteSection', section.id)" title="Hobbies">
    <TextInput
      placeholder="eg. Skiing, Skydiving, Painting etc."
      label="What do you like?"
      @delete="$bus.$emit('deleteSection', section.id)"
      @change="$emit('change', value)"
      v-model="value"
    ></TextInput>
  </Section>
</template>

<script>
import Section from "@/components/Section/Section.vue";
import TextInput from "@/components/TextInput/TextInput.vue";

export default {
  name: "HobbyTemplate",
  props: ["id", "section"],
  computed: {
    value: {
      set(value) {
        this.$store.commit("SET_HOBBIES", value);
      },
      get() {
        return this.$store.state.resume.hobbies;
      }
    }
  },
  components: {
    TextInput,
    Section
  }
};
</script>

<style lang="scss" scoped>
</style>