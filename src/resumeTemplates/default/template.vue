<template>
  <section class="default-resumeContainer">
    <div class="logo_part"><img src="logo.png" alt="" /></div>
    <div class="preview-box">
      <PersonalInformation :data="personalInformation" />
      <div class="container">
        <div class="main">
          <ProfessionalSummary :data="professionalSummary" />
          <Employment v-if="hasItems(employment)" :data="employment" />
          <Education v-if="hasItems(education)" :data="education" />
          <ExtraCurricular v-if="hasItems(extraCurriculars)" :data="extraCurriculars" />
          <References v-if="hasItems(references)" :data="references" />
          <Courses v-if="hasItems(courses)" :data="courses" />
          <Internships v-if="hasItems(internships)" :data="internships" />

          <CustomSections :sections="customSections" />
        </div>
        <div class="aside">
          <SidePersonalInformation :data="personalInformation" />
          <SocialLinks v-if="hasItems(socialLinks)" :data="socialLinks" />
          <Skills v-if="hasItems(skills)" :data="skills" />
          <Languages v-if="hasItems(languages)" :data="languages" />
          <Hobbies v-if="hobbies" :data="hobbies" />
          <TestScores v-if="hasItems(testScores)" :data="testScores" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import PersonalInformation from "./PersonalInformation";
import ProfessionalSummary from "./ProfessionalSummary";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import SocialLinks from "./SocialLinks";
import Employment from "./Employment";
import Education from "./Education";
import ExtraCurricular from "./ExtraCurricular";
import References from "./References";
import Courses from "./Courses";
import Internships from "./Internships";
import CustomSections from "./CustomSections";
import SidePersonalInformation from "./SidePersonalInformation";
import Languages from "./Languages";
import TestScores from "./TestScores";

export default {
  data() {
    return {
      scaleFactor: 1,
      pagesCount: 0
    };
  },
  components: {
    PersonalInformation,
    ProfessionalSummary,
    Skills,
    Hobbies,
    SocialLinks,
    Employment,
    Education,
    ExtraCurricular,
    References,
    Courses,
    SidePersonalInformation,
    Languages,
    Internships,
    CustomSections,
    TestScores
  },
  computed: {
    ...mapState({
      personalInformation: state => state.resume.personalInformation,
      professionalSummary: state => state.resume.professionalSummary,
      skills: state => state.resume.skills,
      employment: state => state.resume.employment,
      education: state => state.resume.education,
      socialLinks: state => state.resume.socialLinks,
      languages: state => state.resume.languages,
      hobbies: state => state.resume.hobbies,
      internships: state => state.resume.internships,
      customSections: state => state.resume.customSections,
      courses: state => state.resume.courses,
      references: state => state.resume.references,
      extraCurriculars: state => state.resume.extraCurriculars,
      testScores: state => state.resume.testScores
    })
  },
  methods: {
    hasItems(section) {
      if (section && Array.isArray(section)) return section.length > 0;
      return section && section.value && section.value.length > 0;
    }
  }
};
</script>

<style scoped>
</style>