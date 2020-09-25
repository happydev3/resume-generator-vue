import Icon from '../Icon/Icon.vue';
import TextInput from '../TextInput/TextInput.vue';
import PersonalInformation from './sections/PersonalInformation/PersonalInformation.vue';
import ProfessionalSummary from './sections/ProfessionalSummary/ProfessionalSummary.vue';
import TestScores from './sections/TestScores/TestScores.vue';
import Skills from './sections/Skills/Skills.vue';
import Courses from './sections/Courses/Courses.vue';
import Education from './sections/Education/Education.vue';
import Employment from './sections/Employment/Employment.vue';
import ExtraCurricular from './sections/ExtraCurriculars/ExtraCurriculars.vue';
import SocialLinks from './sections/SocialLinks/SocialLinks.vue';
import Hobbies from './sections/Hobbies/Hobbies.vue';
import Internships from './sections/Internships/Internships.vue';
import Languages from './sections/Languages/Languages.vue';
import References from './sections/References/References.vue';
import Custom from './sections/Custom/Custom.vue';
import DefaultResumeTemplate from '../../resumeTemplates/default/template.vue';
import 'vue-material-design-icons/styles.css';
import CloudIcon from 'vue-material-design-icons/Cloud.vue';
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';
const sectionsMap = {
    Courses,
    Education,
    Employment,
    ExtraCurricular,
    Hobbies,
    Internships,
    Languages,
    References,
    Skills,
    SocialLinks,
    Custom,
    TestScores,
};

var ratio = 26 / 36;

export default {
    name: 'ResumeContainer',
    components: {
        Icon,
        TextInput,
        PersonalInformation,
        ProfessionalSummary,
        Courses,
        Education,
        Employment,
        ExtraCurricular,
        Hobbies,
        Internships,
        Languages,
        References,
        Skills,
        SocialLinks,
        Custom,
        DefaultResumeTemplate,
        TestScores,
        CloudIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
    },
    computed: {
        sections() {
            return this.$store.state.resume.sections.map(section => ({
                ...section,
                component: sectionsMap[section.name],
            }));
        },
        rules() {
            const data = Object.values(this.$store.getters.progessValue.rules).filter(
                ruleData => ruleData && ruleData.value
            );
            var retvar = data.map(function(e){
                e.label = e.label.slice(0,1).toUpperCase() + e.label.slice(1);
                return e;
            });
            const result = data.length < 7 ? retvar : retvar.slice(0, 6);
            return result;
        },
        progressValue() {
            return this.$store.getters.progessValue.value;
        },
    },
    data() {
        return {
            resumeScale: 0,
            resumeHeight: 0,
            show_progress_rules: false,
            show_button: true,
            flag: true,
            showDeleteSectionConfirmation: false,
            sectionIdForDeletion: null,
        };
    },
    mounted() {

        this.$bus.$on('deleteSection', sectionId => {
            // const result = window.confirm(
            //     'Are you sure you want to delete this section?'
            // );
            // if (result) this.$store.commit('REMOVE_SECTION', sectionId)
            this.showDeleteSectionConfirmation = true;
            this.sectionIdForDeletion = sectionId;
        });
        this.previewWidth = document.getElementsByClassName('preview')[0].offsetHeight * ratio + 'px';
        this.flag = true;
        window.__bypassDeleteSectionModal = false;
        this.timer = setInterval(() => {
            this.setScale();
        }, 10)
        // window.addEventListener('resize', this.setScale);
    },
    methods: {
        onPreview() {
            const node = document
                .querySelector('[data-type="resume-iframe"]')
                .contentDocument.cloneNode(true);
            let prtContent = node.all[0];
            let WinPrint = window.open(
                '',
                '',
                'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0'
            );
            let styles = prtContent.children[0].querySelector('style').innerHTML;
            const additionalStyles = `
        body{ 
        margin: 50px auto;
        box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.3)!important; 
        border-radius: 10px!important;
        }
      `;
            styles += additionalStyles;
            prtContent.children[0].innerHTML = `<style> ${styles} </style>`;
            WinPrint.document.write(prtContent.innerHTML);
        },
        setDeleteSectionConfirmationFlag() {
            window.__bypassDeleteSectionModal = !window.__bypassDeleteSectionModal;
        },

        setScale() {
            if (this.isScale) return;
            this.isScale = true;
            const container = this.$refs.previewMedium;
            const { width } = container.getBoundingClientRect();
            this.resumeScale = width / 900;
            var previewWidth = document.getElementsByClassName('preview')[0].offsetHeight * ratio + 'px';
            document.getElementsByClassName('preview')[0].style.width = previewWidth;
            this.isScale = false;
        },
        onDownload() {
            var prtContent = document.querySelector('[data-type="resume-iframe"]')
                .contentDocument.all[0];
            var WinPrint = window.open(
                '',
                '',
                'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0'
            );
            WinPrint.document.write(prtContent.innerHTML);
            WinPrint.document.close();
            WinPrint.focus();
            WinPrint.print();
            WinPrint.close();
        },
        addSection(name) {
            this.$store.dispatch('AddSection', { name: name })
        },
        deleteSelectedSection() {
            this.selectedForDeletion = null;
            this.showDeleteSectionConfirmation = false;    
            this.$store.commit('REMOVE_SECTION', this.sectionIdForDeletion);
        },
        deleteSection(id) {
            this.$store.dispatch('DeleteSection', { id: id })
        },
        isAdded(sectionName) {
            return this.$store.state.resume.sections.find(
                sec => sec.name === sectionName
            );
        },
    },

    beforeDestroy() {
        // window.removeEventListener('resize', this.setScale);
        clearInterval(this.timer);
    }
};