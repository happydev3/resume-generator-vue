export default {
  props: ['initialValues'],
  mounted() {
    if (this.initialValues) {
      this.value = this.initialValues;
    }
  },
};
