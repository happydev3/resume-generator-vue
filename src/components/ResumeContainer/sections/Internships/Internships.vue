<template>
  <TemplateSection
    @change="persistData"
    :initialValues="$store.state.resume.internships"
    :deletable="true"
    @delete="$bus.$emit('deleteSection', section.id)"
    title="Internship"
    :inputComponent="InternshipTemplate"
    :draggable="true"
  ></TemplateSection>
</template>

<script>
import TemplateSection from "@/components/TemplateSection/TemplateSection.vue";
import InternshipTemplate from "@/inputTemplates/Internship/Internship.vue";

export default {
  name: "Internships",
  components: {
    TemplateSection
  },
  props: ["section"],
  data() {
    return {
      InternshipTemplate
    };
  },
  methods: {
    persistData(val) {
      this.$store.commit("SET_INTERNSHIPS", val);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>