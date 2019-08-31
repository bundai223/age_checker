import {
  MutationAction,
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators';
import store from '@/store';

export interface IDateDatum {
  title: string;
  date: Date | null;
}

@Module({
  dynamic: true,
  namespaced: true,
  name: 'date',
  store,
})
class DateModule extends VuexModule {
  dates: IDateDatum[] = [];

  get dateData(): IDateDatum[] {
    return this.dates;
  }

  @Mutation
  private ADD_DATE(title: string, date: Date | null) {
    this.dates.push({ title, date });
  }

  @Mutation
  private UPDATE_DATE(index: number, title: string, date: Date | null) {
    console.log(`UPDATE_DATE### ${title}: ${date}`)
    this.dates[index] = { title, date };
  }

  @Action
  public addDate() {
    this.ADD_DATE('', null);
  }

  @Action
  public updateDate(index: number, title: string, date: Date | null) {
    console.log(`updateDate### [${index}]${title} - ${date}`)
    this.UPDATE_DATE(index, title, date);
  }
}

export default getModule(DateModule);
