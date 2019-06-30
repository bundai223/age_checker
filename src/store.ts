import {
  Mutation,
  Action,
  VuexModule,
  Module
} from 'vuex-module-decorators';

class DateData {
  public title: string = '';
  public date: Date = new Date();
}

@Module
export default class Dates extends VuexModule {
  private dates: DateData[] = new Array<DateData>();

  @Mutation
  public ADD_DATE(title: String, date: Date) {
    this.dates.push(new DateData())
  }
}
