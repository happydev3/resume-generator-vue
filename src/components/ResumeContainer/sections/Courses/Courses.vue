<template>
  <TemplateSection
    @change="persistData"
    :initialValues="$store.state.resume.courses"
    :deletable="true"
    @delete="$bus.$emit('deleteSection', section.id)"
    title="Courses"
    :inputComponent="CourseTemplate"
    :draggable="true"
  ></TemplateSection>
</template>

<script>
import TemplateSection from "@/components/TemplateSection/TemplateSection.vue";
import CourseTemplate from "@/inputTemplates/Course/Course.vue";

export default {
  name: "Courses",
  components: {
    TemplateSection
  },
  props: ["id", "section"],
  data() {
    return {
      CourseTemplate
    };
  },
  methods: {
    persistData(val) {
      this.$store.commit("SET_COURSES", val);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>