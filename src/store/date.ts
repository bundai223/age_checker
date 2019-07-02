import {
  MutationAction,
  Mutation,
  Action,
  VuexModule,
  Module
} from 'vuex-module-decorators';

export interface DateData {
  public title: string = '';
  public date: Date = new Date();
}

@Module
export default class Dates extends VuexModule {
  private dates: DateData[] = [];

  get dateData() {
    return this.dates;
  }

  @MutationAction({ mutate: ['dates'] })
  public async newDate(title: string, date: Date) {
    return {
      dates: this.dates.push({})
    };
  }

//   @Mutation
//   public addDate(title: string, date: Date) {
//     this.dates.push(new DateData());
//   }

//   @Action({ commit: 'addDate' })
//   public add() {
//     return 5;
//   }
// }
