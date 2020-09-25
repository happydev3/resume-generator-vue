<template>
  <TemplateSection
    @change="persistData"
    :initialValues="$store.state.resume.skills"
    :deletable="false"
    @delete="$bus.$emit('deleteSection', section.id)"
    title="Skills"
    :inputComponent="SkillTemplate"
    :draggable="true"
  ></TemplateSection>
</template>

<script>
import TemplateSection from "@/components/TemplateSection/TemplateSection.vue";
import SkillTemplate from "@/inputTemplates/Skill/Skill.vue";

export default {
  name: "Skills",
  props: ["section"],
  components: {
    TemplateSection
  },
  data() {
    return {
      SkillTemplate
    };
  },
  methods: {
    persistData(val) {
      this.$store.commit("SET_SKILLS", val);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>