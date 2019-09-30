import {
  MutationAction,
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
import { get } from 'request';
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

  @Mutation
  private SAVE_TO_STORAGE() {
    console.log(`SAVE_TO_STORAGE###`);
    localStorage.setItem('age_checker', JSON.stringify(this.dates));
  }

  @Mutation
  private RESTORE_FROM_STORAGE() {
    console.log(`RESTORE_FROM_STORAGE### ${localStorage.getItem('age_checker')}`);
    // let localstoraged:string | null = localStorage.getItem('age_checker');
    // if (localstoraged) {
    //   let storaged_dates: Object[] = JSON.parse(localstoraged);
    //   this.dates = storaged_dates.map((date_obj:any) : IDateDatum => {
    //     return { date_obj['title'], date_obj['date'] };
    //   });
    // }
  }

  @Action
  public async initializeDate() {
    console.log(`initializeDate`);
    this.RESTORE_FROM_STORAGE();
  }

  @Action
  public async addDate() {
    this.ADD_DATE('', null);
  }

  @Action
  public async updateDate(index_: number, title_: string, date_: Date | null) {
    const index = await get(index_);
    const title = await get(title_);
    const date = await get(date_);
    console.log(`updateDate### [${index}]${title} - ${date}`)
    this.UPDATE_DATE(index, title, date);
    this.SAVE_TO_STORAGE();
  }
}

export default getModule(DateModule);
