<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md12>
      <Date2Age/>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Date2Age from '@/components/Date2Age.vue';

@Component({
  components: {
    Date2Age,
  },
})
export default class Home extends Vue {}
</script>
