<template>
  <TemplateSection
    @change="persistData"
    @changeTitle="changeTitle"
    :deletable="true"
    :initialValues="sectionValues"
    @delete="$bus.$emit('deleteSection', section.id)"
    :titleEditable="true"
    :title="defaultTitle"
    :inputComponent="CustomTemplate"
  ></TemplateSection>
</template>

<script>
import TemplateSection from "@/components/TemplateSection/TemplateSection.vue";
import CustomTemplate from "@/inputTemplates/Custom/Custom.vue";
export default {
  name: "Custom",
  components: {
    TemplateSection
  },
  props: ["id", "section", "initialValues"],
  data() {
    return {
      CustomTemplate
    };
  },
  computed: {
    defaultTitle() {
      const customSections = this.$store.state.resume.customSections;
      const sectionData = customSections.find(
        d => d.sectionId === this.section.id
      );
      return sectionData && sectionData.title ? sectionData.title : "Untitled";
    },
    sectionValues() {
      const customSections = this.$store.state.resume.customSections;
      const sectionData = customSections.find(
        d => d.sectionId === this.section.id
      );
      const result = sectionData ? sectionData.value : null;
      return result;
    }
  },
  methods: {
    changeTitle(title) {
      this.$store.commit("UPDATE_SECTION_TITLE", {
        sectionId: this.section && this.section.id,
        title
      });
    },
    persistData(val) {
      this.$store.commit("SET_CUSTOM_DATA", {
        sectionId: this.section.id,
        value: val
      });
    }
  }
};
</script>

<style lang="scss" scoped >
</style>