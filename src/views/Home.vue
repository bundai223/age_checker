<template>
  <v-app>
    <!--<github-corners repo='bundai223/age_checker'></github-corners>-->
    <v-toolbar app>
      <v-toolbar-title class='headline'>
        <span class='font-weight-light'>Age checker</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-btn
          absolute
          dark
          fab
          top
          right
          color='pink'
        >
          <v-icon>add</v-icon>
        </v-btn>
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
  }
});

export default class Home extends Vue {}
</script>
