<template>
  <Section title="Professional Summary">
    <RichEditor
      :value="$store.state.resume.professionalSummary"
      @change="persistData"
      label="Include 2-3 clear sentences about your overall experience"
    />
  </Section>
</template>

<script>
import Section from "@/components/Section/Section.vue";
import RichEditor from "@/components/RichEditor/RichEditor.vue";
export default {
  name: "ProfessionalSummary",
  components: {
    Section,
    RichEditor
  },
  methods: {
    persistData(val) {
      this.$store.commit("SET_PROFESSIONAL_SUMMARY", val);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>