<template>
  <TemplateContainer @delete="$emit('delete')">
    <template v-slot:header>
      <div class="col">
        <div class="row text-bold">
          <span class="mr-10">{{value.name || "(Not Specified)"}}</span>
        </div>
        <div class="row" v-if="value.level">{{ optionsMap[value.level] }}</div>
      </div>
    </template>

    <template v-slot:body>
      <div class="row">
        <div class="col">
          <TextInput @change="emitVal" :autocomplete="true" label="Skill" v-model="value.name"
          :list="[{name: 'Java'}, {name: 'JavaScript'}, {name: 'Core Java'},{name: 'C++'},{name: 'Objective-C'}, ,{name: 'VueHS'}]"></TextInput>
          <!-- <autocomplete-vue @change="emitVal" label="Skill" v-model="value.name"
              :list="[{name: 'Java'}, {name: 'JavaScript'}, {name: 'Core Java'},{name: 'C++'}]"
              :threshold="1"
              placeholder="Autocomplete"
          ></autocomplete-vue> -->
        </div>
        <div class="col">
          <RadioGroup
            @change="emitKey"
            label="Level"
            v-model="value.level"
            :options="options"
          ></RadioGroup>
        </div>
      </div>
    </template>
  </TemplateContainer>
</template>

<script>
import TemplateContainer from "@/components/TemplateContainer/TemplateContainer.vue";
import TextInput from "@/components/TextInput/TextInput.vue";
import RadioGroup from "@/components/RadioGroup/RadioGroup.vue";
import common from "../common";

export default {
  name: "SkillTemplate",
  props: [
   
  ],
  components: {
    TemplateContainer,
    TextInput,
    RadioGroup
  },
  mixins: [common],
  data() {
    return {
      value: {
        name: "",
        level: '0'
      },
      options:[
        {text: ' ', value:20},
        {text: ' ', value:40},
        {text: ' ', value:60},
        {text: ' ', value:80},
        {text: ' ', value:100},
      ],
      optionsMap:{
        20: 'Novice',
        40: 'Beginner',
        60: 'Skillful',
        80: 'Experienced',
        100: 'Expert'
      }
    };
  },
  methods: {
    emitVal() {
      // alert(this.value.level)
      this.$emit("change", this.value);
    },
    emitKey(){
      // alert(this.value.level);
      // return;
      this.$emit('change', this.value)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>