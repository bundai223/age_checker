import {
    MutationAction,
    Mutation,
    Action,
    VuexModule,
    Module
} from 'vuex-module-decorators';

export interface IDateDatum {
    title: string;
    date: Date;
}

export interface IDateData {
    dates: IDateDatum[];
}

@Module
export default class Dates extends VuexModule implements IDateData {
    dates: IDateDatum[] = [];

    get dateData() {
        return this.dates;
    }

    @MutationAction({ mutate: ['dates'] })
    public async newDate() {
        return {
            dates: this.dates.push({ title: '', date: new Date() })
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
}
