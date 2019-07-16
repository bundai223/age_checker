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
    date: Date?;
}

@Module({
    dynamic: true,
    namespaced: true,
    name: 'date',
    store,
})
class DateModule extends VuexModule {
    dates: Array<IDateDatum> = [];

    get dateData(): Array<IDateDatum> {
        return this.dates;
    }

    @Mutation
    private ADD_DATE(title: string, date: Date?) {
        this.dates.push({ title: title, date: date });
    }

    @Action
    public addDate() {
        this.ADD_DATE('', null);
    }
}

export default getModule(DateModule);
