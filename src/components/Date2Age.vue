<template>
  <div class="date2age row">
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Date2Age extends Vue {
  public birthday: string = ''
  editing: boolean = true

  get age(): number {
    const today = new Date()
    const birth = this.date
    return Math.floor((this.date2num(today) - this.date2num(birth)) / 10000)
  }

  get date(): Date {
    return new Date(this.birthday)
  }

  get dateJp(): string {
    var options = { era: 'long' }
    return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(this.date)
  }

  private isCollect(): boolean {
    var d = new Date(this.birthday)
    return !(d.toString() === 'Invalid Date')
  }

  private date2num(d: Date): number {
    return Number(d.getFullYear().toString().padStart(4, '0') + d.getMonth().toString().padStart(2, '0') + d.getDate().toString().padStart(2, '0'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
