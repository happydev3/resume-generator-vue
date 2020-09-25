<template>
  <TemplateSection
    @change="persistData"
    :deletable="true"
    :initialValues="$store.state.resume.languages"
    @delete="$bus.$emit('deleteSection', section.id)"
    title="Language"
    :inputComponent="LanguageTemplate"
  ></TemplateSection>
</template>

<script>
import TemplateSection from "@/components/TemplateSection/TemplateSection.vue";
import LanguageTemplate from "@/inputTemplates/Language/Language.vue";

export default {
  name: "Languages",
  props: ["section"],
  components: {
    TemplateSection
  },
  data() {
    return {
      LanguageTemplate
    };
  },
  methods: {
    persistData(val) {
      this.$store.commit("SET_LANGUAGES", val);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>