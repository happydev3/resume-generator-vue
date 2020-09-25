<template>
  <TemplateSection
    @change="persistData"
    :initialValues="$store.state.resume.references"
    :deletable="true"
    @delete="$bus.$emit('deleteSection', section.id)"
    title="Refererences"
    :inputComponent="ReferenceTemplate"
    :draggable="true"
  ></TemplateSection>
</template>

<script>
import TemplateSection from "@/components/TemplateSection/TemplateSection.vue";
import ReferenceTemplate from "@/inputTemplates/Reference/Reference.vue";

export default {
  name: "Refererences",
  props: ["section"],
  components: {
    TemplateSection
  },
  data() {
    return {
      ReferenceTemplate
    };
  },
  methods: {
    persistData(val) {
      this.$store.commit("SET_REFERENCES", val);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>