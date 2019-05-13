<template>
  <div class="home">
    <Date2Age/>
  </div>
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
