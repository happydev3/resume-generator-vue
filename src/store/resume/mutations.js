import Vue from 'vue';
import {resumeCollection} from '../../firebase'

export default {
  SET_PERSONAL_INFORMATION: (state, info) => {
    state.personalInformation = info
    resumeCollection.doc(state.user).set({personalInformation: info}, { merge: true })
  } ,
  SET_PROFESSIONAL_SUMMARY: (state, summary) => {
    (state.professionalSummary = summary)
    resumeCollection.doc(state.user).set({professionalSummary: summary}, { merge: true })
  }
    ,
  SET_SOCIAL_LINKS: (state, links) => {
    Vue.set(state, 'socialLinks', links)
    resumeCollection.doc(state.user).set({socialLinks: links}, { merge: true })
  },
  SET_COURSES: (state, courses) => {
    Vue.set(state, 'courses', courses)
    resumeCollection.doc(state.user).set({courses: courses}, { merge: true })
  },
  SET_EXTRA_CURRICULAR: (state, extraCurriculars) =>
  {
    Vue.set(state, 'extraCurriculars', extraCurriculars)
    resumeCollection.doc(state.user).set({extraCurriculars: extraCurriculars}, { merge: true })
  },
    
  SET_HOBBIES: (state, hobbies) => {
    Vue.set(state, 'hobbies', hobbies)
    resumeCollection.doc(state.user).set({hobbies: hobbies}, { merge: true })
  },
  SET_SKILLS: (state, skills) => {
    Vue.set(state, 'skills', skills)
    resumeCollection.doc(state.user).set({skills: skills}, { merge: true })
  },
  SET_EMPLOYMENT: (state, employment) =>
    {
      Vue.set(state, 'employment', employment)
      resumeCollection.doc(state.user).set({employment: employment}, { merge: true })
    },
  SET_EDUCATION: (state, education) => {
    Vue.set(state, 'education', education)
    resumeCollection.doc(state.user).set({education: education}, { merge: true })
  },
  SET_INTERNSHIPS: (state, internships) =>
  {
    Vue.set(state, 'internships', internships)
    resumeCollection.doc(state.user).set({internships: internships}, { merge: true })
  },
  SET_LANGUAGES: (state, languages) => {
    Vue.set(state, 'languages', languages)
    resumeCollection.doc(state.user).set({languages: languages}, { merge: true })
  },
  SET_TEST_SCORES: (state, testScores) => {
    Vue.set(state, 'testScores', testScores)
    resumeCollection.doc(state.user).set({testScores: testScores}, { merge: true })
  },
  SET_REFERENCES: (state, references) => {
    Vue.set(state, 'references', references)
    resumeCollection.doc(state.user).set({references: references}, { merge: true })
  },
  UPDATE_SECTION_TITLE: (state, { sectionId, title }) => {
    let newSections = state.customSections.map(section => {
      if (section.sectionId === sectionId) {
        return { ...section, title };
      }
      return section;
    });
    state.customSections = newSections;
    resumeCollection.doc(state.user).set({customSections: state.customSections}, { merge: true })
  },
  SET_CUSTOM_DATA: (state, sectionData) => {
    const index = state.customSections.findIndex(
      item => item.sectionId === sectionData.sectionId
    );
    if (index > -1) {
      // update values only
      return (state.customSections[index] = {
        ...state.customSections[index],
        ...sectionData,
      });
    }
    state.customSections.push(sectionData);
    resumeCollection.doc(state.user).set({customSections: state.customSections}, { merge: true })
  },
  ADD_SECTION: (state, sectionName) => {
    state.sections.push({
      id: (Math.random() * 10000) | 0,
      name: sectionName,
    });
    resumeCollection.doc(state.user).set({sections: state.sections}, { merge: true })
  },
  REMOVE_SECTION: (state, sectionId) => {
    const customSectionsExpceptSectionId = section =>
      section.sectionId !== sectionId;
    const sectionsExpceptSectionId = section => section.id !== sectionId;
    const sectionWithSectionId = section => section.id === sectionId;
    const keyMap = {
      Courses: 'courses',
      Eductaion: 'education',
      Employment: 'employment',
      ExtraCurricular: 'extraCurriculars',
      Skills: 'skills',
      References: 'references',
      Languages: 'languages',
      Internships: 'internships',
      Hobbies: 'hobbies',
      TestScores: 'testScores',
    };

    const section = state.sections.find(sectionWithSectionId);
    switch (section.name) {
      case 'Custom': {
        state.customSections = state.customSections.filter(
          customSectionsExpceptSectionId
        );
        break;
      }
      default: {
        const key = keyMap[section.name];
        state[key] = null;
        break;
      }
    }
    state.sections = state.sections.filter(sectionsExpceptSectionId);
    // reset the data
    resumeCollection.doc(state.user).set({sections: state.sections}, { merge: true })
  },
  SET_USER: (state, payload) => {
    state.user = payload;
  },
  REMOVE_USER: (state) => {
    state.user = null;
  },
  SET_RESUME_INFO: (state, payload) => {
    for(var key in payload) {
      Vue.set(state, key, payload[key])
    }
  },
  SET_VERIFIED: (state, payload) => {
    state.loginStatus = payload;
  },
  SET_SIGNUP_ERROR: (state, payload) => {
    state.signUpStatus = payload;
  },
};
