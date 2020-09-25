<template>
  <div class="file-container">
    <div class="img-container">
      <img v-if="value" :src="value" />
      <Icon v-else fill="#D3001D" type="profile" />
    </div>
    <button @click="toggleShow" class="image-upload-btn link" v-if="!value">Upload Image</button>
    <div v-else>
      <button class="link" @click="toggleShow">Edit Image</button>
      <button class="link" @click="$emit('input', null)">Remove Image</button>
    </div>
    
    <upload
      field="img"
      @crop-success="cropSuccess"
      @input="show=false"
      v-if="show"
      :width="300"
      langType="en"
      :height="300"
      :params="params"
      :headers="headers"
      img-format="jpg"
    ></upload>
  </div>
</template>

<script>
import Upload from "vue-image-crop-upload";
import Icon from "@/components/Icon/Icon.vue";

export default {
  components: {
    Upload,
    Icon
  },
  props: ["value"],
  data() {
    return {
      show: false,
      params: {
        token: "123456798",
        name: "avatar"
      },
      headers: {
        smail: "*_~"
      },
      imgDataUrl: ""
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl) {
      this.imgDataUrl = imgDataUrl;
      this.$emit("input", imgDataUrl);
      
    }
  }
};
</script>

<style lang="scss" scoped>
.file-container {
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  .img-container {
    border-radius: 5px;
    background: #f2f5fa;
    width: 50px;
    height: 50px;
    margin: 10px;
    margin-left: 0;
    overflow: hidden;
    padding: 0;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>