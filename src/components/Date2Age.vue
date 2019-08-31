<template>
<v-card>
  <v-layout>
    <v-flex xs6 sm6 md6>
      <v-layout class='align-baseline' v-if='isCollect()'>
        <v-card-text class='display-4'>{{ age }}</v-card-text>
        <v-card-text class='display-1'>歳</v-card-text>
      </v-layout>
    </v-flex>
    <v-flex xs6 sm6 md6>
      <v-form>
        <v-text-field v-model='title' v-if='editingTitle' type='text' v-on:change='saveDate()' placeholder='title'></v-text-field>
        <v-text-field v-model='title' v-else disabled type='text' v-on:click='editTitle()' placeholder='title'></v-text-field>
        <v-text-field v-model='birthday_str' v-if='editingDate' type='text' v-on:change='saveDate()' placeholder='2019/01/01'></v-text-field>
        <v-text-field v-model='birthday_str' v-else disabled type='text' v-on:click='editDate()' placeholder='2019/01/01'></v-text-field>
      </v-form>
      <span v-if='isCollect()'>{{ dateJp }}</span>
    </v-flex>
  </v-layout>
</v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import dateStore from '@/store/date';
import _ from 'lodash';

@Component
export default class Date2Age extends Vue {
  public title: string = '';
  public birthday_str: string = '';
  private editingTitle: boolean = true;
  private editingDate: boolean = true;

  @Prop() initial_title: string;
  @Prop() initial_date: Date?;

  get age(): number {
    const today = new Date();
    const birth = this.date;
    return Math.floor((this.date2num(today) - this.date2num(birth)) / 10000);
  }

  get date(): Date {
    return new Date(this.birthday_str);
  }

  get dateJp(): string {
    const options = { era: 'long' };
    return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(this.date);
  }

  get editing(): boolean {
    if (this.editingTitle) { return true; }
    if (this.editingDate) { return true; }
    return false;
  }

  created() {
    if (this.title) {
      this.title = this.initial_title ? this.initial_title : '';
    }
    if (this.initial_date) {
      this.birthday_str = this.initial_date.toLocaleDateString();
    }
  }

  private isCollect(): boolean {
    const d = new Date(this.birthday_str);
    return !(d.toString() === 'Invalid Date');
  }

  private date2num(d: Date): number {
    return Number(
      this.padNumber(d.getFullYear(), 4) + this.padNumber(d.getMonth(), 2) + this.padNumber(d.getDate(), 2)
    );
  }

  private padNumber(num: number, paddingCount: number): string {
    return num.toString().padStart(paddingCount, '0');
  }

  private editDate() {
    this.editingDate = true;
  }

  private editTitle() {
    this.editingTitle = true;
  }

  private async saveDate() {
    let index = 0;
    console.log(`saveDate### [${index}]${this.title} - ${this.date}`)
    dateStore.updateDate(index, this.title, this.date);
    // _.debounce( async () => { await dateStore.updateDate(index, this.title, this.date) }, 1000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

v-card {
  margin: 8px;
}
</style>
