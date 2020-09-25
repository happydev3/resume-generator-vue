import registerResumeTemplate from '../registerResumeTemplate';
import DefaultResume from './default/template.vue';
import DefaultResumeCss from 'raw-loader!./default/styles.csstxt';

registerResumeTemplate('default-resume', DefaultResume, DefaultResumeCss);
