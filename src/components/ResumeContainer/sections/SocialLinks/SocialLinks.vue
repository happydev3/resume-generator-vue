<template>
  <TemplateSection 
  :initialValues="$store.state.resume.socialLinks" 
  @change="persistData" 
  title="Website Social Links" 
  description="LinkedIn profile, or personal website" 
  :inputComponent="SocialLinkTemplate">
  </TemplateSection>
</template>

<script>
import TemplateSection from "@/components/TemplateSection/TemplateSection.vue";
import SocialLinkTemplate from "@/inputTemplates/SocialLink/SocialLink.vue";

export default {
  name: "SocialLinks",
  components: {
    TemplateSection
  },
  data() {
    return {
      SocialLinkTemplate
    };
  },
  methods: {
    persistData(val){
      this.$store.commit("SET_SOCIAL_LINKS", val);
    }
  }
};
</script>

<style lang="scss" scoped >
</style>