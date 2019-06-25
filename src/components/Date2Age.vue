<template>
  <v-card class="date2age row">
    <div class='six columns'>
      <form v-if='editing'>
        <input class='u-full-width' v-model='birthday' type='text' placeholder='2019/01/01'></input>
        <a class='button'>#</a>
      </form>
      <div v-else>{{ birthday }}</div>
      <span v-if='isCollect()'>{{ dateJp }}</span>
    </div>
    <div class='six columns'>
      <br>
      <h3 v-if='isCollect()'>{{ age }}歳</h3>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Date2Age extends Vue {
  public birthday: string = '';
  private editing: boolean = true;

  get age(): number {
    const today = new Date();
    const birth = this.date;
    return Math.floor((this.date2num(today) - this.date2num(birth)) / 10000);
  }

  get date(): Date {
    return new Date(this.birthday);
  }

  get dateJp(): string {
    const options = { era: 'long' };
    return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(this.date);
  }

  private isCollect(): boolean {
    const d = new Date(this.birthday);
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
