import {defineStore} from "pinia";
import {darkTheme} from 'naive-ui'


interface IState {
    theme: null | typeof darkTheme
}
export const useGlobalStore = defineStore('global',  {
    state: (): IState => ({
        theme: darkTheme
    })
})
