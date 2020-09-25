<template>
  <Section title="Personal Details">
    <div class="default-slot">
      <div class="row">
        <div class="col">
          <TextInput
            placeholder="eg. Teacher"
            v-model="values.jobTitle"
            tooltip="Add a title like ‘Senior Marketer’ or ‘Sales Executive’ that quickly describes your overall experience or the type of role you're applying to"
            label="Job Title"
          />
        </div>
        <div class="col">
          <upload v-model="values.image" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TextInput v-model="values.firstName" label="First Name" />
        </div>
        <div class="col">
          <TextInput v-model="values.lastName" label="Last Name" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <TextInput v-model="values.university" label="University" />
        </div>
        <div class="col">
          <TextInput v-model="values.graduationyear" label="Graduation Year" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <TextInput v-model="values.major" label="Major" />
        </div>
        <div class="col">
          <TextInput v-model="values.collegeemail" label="College Email" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <TextInput v-model="values.email" label="Personal Email" type="email" />
        </div>
        <div class="col">
          <TextInput v-model="values.phone" label="Phone" type="phone" />
        </div>
      </div>
    </div>
    <template v-slot:collpased>
      <div class="row">
        <div class="col">
          <TextInput v-model="values.country" label="Country" />
        </div>
        <div class="col">
          <TextInput v-model="values.city" label="City" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TextInput v-model="values.address" label="Address" />
        </div>
        <div class="col">
          <TextInput v-model="values.postalCode" label="Postal Code" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TextInput
            v-model="values.drivingLicense"
            tooltip="Include this section to help ensure you are only contacted about opportunities you can legally commit to."
            label="Visa Type"
          />
        </div>
        <div class="col">
          <TextInput
            v-model="values.nationality"
            tooltip="Include your nationality only if it is relevant to your position. In most cases, leave this blank."
            label="Nationality"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <TextInput v-model="values.placeOfBirth" label="Place Of Birth" />
        </div>
        <div class="col">
          <TextInput
            tooltip="Add your date of birth only if it is a relevant requirement for your position. In most cases, leave this blank."
            v-model="values.dateOfBirth"
            :date="true"
            label="Date Of Birth"
          />
        </div>
      </div>
    </template>
  </Section>
</template>

<script>
import Section from "@/components/Section/Section.vue";
import TextInput from "@/components/TextInput/TextInput.vue";
import Upload from "@/components/Upload/Upload.vue";

export default {
  name: "PersonalInformation",
  components: {
    Section,
    TextInput,
    Upload
  },
  data() {
    return {
      values: {
        firstName: null,
        lastName: null,
        jobTitle: null,
        email: null,
        phone: null,
        country: null,
        city: null,
        address: null,
        postalCode: null,
        drivingLicense: null,
        nationality: null,
        placeOfBirth: null,
        dateOfBirth: null,
        image: null
      }
    };
  },
  watch: {
    values: {
      handler() {
        this.$store.commit("SET_PERSONAL_INFORMATION", this.values);
      },
      deep: true
    }
  },
  mounted() {
    const data = this.$store.state.resume.personalInformation;
    if (data) {
      this.values = data;
    }
  },
  methods: {
    onImageChoose(e) {
      const fr = new FileReader();
      fr.readAsDataURL(e.target.files[0]);
      fr.onload = e => (this.values.image = e.target.result);
    }
  }
};
</script>

<style lang="scss" scoped>
.image-upload-btn {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
</style>