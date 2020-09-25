<template>
  <TemplateSection
    :initialValues="$store.state.resume.testScores"
    @change="persistData"
    :deletable="true"
    title="Test Scores"
    @delete="$bus.$emit('deleteSection', section.id)"
    description="Add your test scores"
    :inputComponent="TestScoreTemplate"
    :draggable="true"
  ></TemplateSection>
</template>

<script>
import TemplateSection from "@/components/TemplateSection/TemplateSection.vue";
import TestScoreTemplate from "@/inputTemplates/TestScore/TestScore.vue";

export default {
  name: "TestScores",
  props: ["section"],
  components: {
    TemplateSection
  },
  data() {
    return {
      TestScoreTemplate
    };
  },
  methods: {
    persistData(val) {
      this.$store.commit("SET_TEST_SCORES", val);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>