const getWordCount = html => {
  if (!html) return false;
  const p = document.createElement('p');
  p.innerHTML = html;
  return p.innerText.length > 0;
};

export default {
  progessValue(state) {
    let value = 4;
    let rules = {
      jobTitle: {
        label: 'add job title',
        value: 5,
      },
      profesionalSummary: {
        label: 'add profile summary',
        value: 10,
      },
      employment: {
        label: 'add employment history',
        value: 8,
      },
      education: {
        label: 'add education',
        value: 7,
      },
      references: {
        label: 'add references',
        value: 7,
      },
      skills: {
        label: 'add skills',
        value: 6,
      },
      courses: {
        label: 'add courses',
        value: 6,
      },
      extraCurriculars: {
        label: 'add extra-curricular activities',
        value: 4,
      },
      languages: {
        label: 'add language',
        value: 4,
      },
    };

    if (state.personalInformation && state.personalInformation.jobTitle) {
      value += 5;
      rules.jobTitle.value = 0;
    }
    if (getWordCount(state.professionalSummary)) {
      value += 10;
      rules.profesionalSummary.value = 0;
    }
    if (state.employment) {
      if (state.employment.length > 0) {
        value += 8;
        rules.employment.value = 5;
      }
      if (state.employment.length > 1) {
        value += 5;
        rules.employment.value = 0;
      }
    } //28

    const level2_items = [
      ['education', state.education],
      ['references', state.references],
    ];
    level2_items.forEach(([key, item]) => {
      if (item) {
        if (item.length > 0) {
          value += 7;
          rules[key].value = 4;
        }
        if (item.length > 1) {
          value += 4;
          rules[key].value = 3;
        }
        if (item.length > 2) {
          value += 3;
          rules[key].value = 0;
        }
      }
    }); //28

    const level3_items = [
      ['skills', state.skills],
      ['courses', state.courses],
      ['extraCurriculars', state.extraCurriculars],
      ['languages', state.languages],
    ];
    level3_items.forEach(([key, item]) => {
      if (item) {
        if (item.length > 0) {
          value += 5;
          rules[key].value = 3;
        }
        if (item.length > 1) {
          value += 3;
          rules[key].value = 2;
        }
        if (item.length > 2) {
          value += 2;
          rules[key].value = 0;
        }
      }
    });

    const finalValue = value > 100 ? 100 : value;
    return {
      value: finalValue,
      rules,
    };
  },
};
