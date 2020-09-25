<template>
  <div class="aside__section" v-if="data">
    <div class="aside__title" v-if="hasNeededKeys()">Details</div>
    <div class="aside__content" v-if="hasNeededKeys()">
      <div class="aside__paragraph">
        <div class="aside__text">
          {{data.address}}
          {{contactDetails}}
        </div>
        <div class="aside__text aside__text--link setting--primary-text">{{ data.email }}</div>
      </div>
      <div class="aside__paragraph" v-if="data.dateOfBirth || data.placeOfBirth">
        <div class="aside__label">Date / Place of birth</div>
        <div class="aside__text">{{data.dateOfBirth}}</div>
        <div class="aside__text">{{data.placeOfBirth}}</div>
      </div>
      <div class="aside__paragraph" v-if="data.nationality">
        <div class="aside__label">Nationality</div>
        <div class="aside__text">{{data.nationality}}</div>
      </div>
      <div class="aside__paragraph" v-if="data.drivingLicense">
        <div class="aside__label">Driving license</div>
        <div class="aside__text">{{ data.drivingLicense}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    contactDetails() {
      if (!this.data) return "";
      const { city, postalCode, country, phone } = this.data;
      return [city, postalCode, country, phone]
        .filter(Boolean)
        .map(x => x.trim())
        .join(", ");
    }
  },
  methods: {
    hasNeededKeys() {
      const data = this.data;
      return (
        data &&
        (data.address ||
          data.city ||
          data.email ||
          data.postalCode ||
          data.phone ||
          data.country ||
          data.nationality ||
          data.drivingLicense ||
          data.dateOfBirth ||
          data.placeOfBirth)
      );
    }
  }
};
</script>

<style>
</style>