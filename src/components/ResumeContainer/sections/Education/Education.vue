<template>
  <TemplateSection
    @change="persistData"
    :initialValues="$store.state.resume.education"
    :deletable="false"
    @delete="$bus.$emit('deleteSection', section.id)"
    title="Education"
    :inputComponent="EducationTemplate"
  ></TemplateSection>
</template>

<script>
import TemplateSection from "@/components/TemplateSection/TemplateSection.vue";
import EducationTemplate from "@/inputTemplates/Education/Education.vue";

export default {
  name: "Education",
  components: {
    TemplateSection
  },
  props: ["id", "section"],
  data() {
    return {
      EducationTemplate
    };
  },
  methods: {
    persistData(val) {
      this.$store.commit("SET_EDUCATION", val);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>