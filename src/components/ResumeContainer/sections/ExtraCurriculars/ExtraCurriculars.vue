<template>
  <TemplateSection
    @change="persistData"
    :initialValues="$store.state.resume.extraCurriculars"
    :deletable="true"
    @delete="$bus.$emit('deleteSection', section.id)"
    title="Extra-curricular activities"
    :inputComponent="ExtraCurricularTemplate"
  ></TemplateSection>
</template>

<script>
import TemplateSection from "@/components/TemplateSection/TemplateSection.vue";
import ExtraCurricularTemplate from "@/inputTemplates/ExtraCurricular/ExtraCurricular.vue";

export default {
  name: "ExtraCurriculars",
  props: ["id", "section"],
  components: {
    TemplateSection
  },
  data() {
    return {
      ExtraCurricularTemplate
    };
  },
  methods: {
    persistData(val) {
      this.$store.commit("SET_EXTRA_CURRICULAR", val);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>