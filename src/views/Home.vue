<template>
  <v-app>
    <!--<github-corners repo='bundai223/age_checker'></github-corners>-->
    <v-toolbar app>Age checker</v-toolbar>
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm12 md12>
            <Date2Age/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
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
