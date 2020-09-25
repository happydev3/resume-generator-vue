<template>
  <TemplateSection
    @change="persistData"
    :initialValues="$store.state.resume.employment"
    :deletable="false"
    @delete="$bus.$emit('deleteSection', section.id)"
    title="Employment History"
    description="Include your last 10 years of relevant experience and dates in this section. List your most recent position first."
    :inputComponent="EmploymentTemplate"
    :draggable="true"
  ></TemplateSection>
</template>

<script>
import TemplateSection from "@/components/TemplateSection/TemplateSection.vue";
import EmploymentTemplate from "@/inputTemplates/Employment/Employment.vue";

export default {
  name: "Employment",
  props: ["id", "section"],
  components: {
    TemplateSection
  },
  data() {
    return {
      EmploymentTemplate
    };
  },
  methods: {
    persistData(val) {
      this.$store.commit("SET_EMPLOYMENT", val);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>