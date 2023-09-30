import {defineStore} from "pinia";
import axios from "axios";
import type {IResult} from "@/shims-vue";


interface IState {
    fetchStatus: 'init' | 'loading' | 'error' | 'success'
    results: IResult[],
    categories: Set<string>
}

export const useResultsStore = defineStore('results',  {
    state: (): IState => ({
        fetchStatus: 'init',
        results: [],
        categories: new Set()
    }),
    actions:  {
        async loadInfo(url: string) {
            this.fetchStatus = 'loading'
            try {
                const res = await axios.get(`https://hack-solution.tech/api/v1/company/check_url?domain=${url}`);
                if (res.data) {
                    res.data.url = url
                    this.results = [res.data, ...this.results]
                    this.categories.add(res.data.category)
                    localStorage.setItem('results', JSON.stringify(this.results))
                    this.fetchStatus = 'success'
                }
            } catch (e: unknown) {
                this.fetchStatus = 'error'
                if (axios.isAxiosError(e)) {
                    console.log(e)
                    return {
                        status: this.fetchStatus,
                        code: e.response?.status
                    }
                }
            } finally {
                this.fetchStatus = "init"
            }
        },
        removeItem(item: IResult) {
            this.results = this.results.filter(res => res.url !== item.url)
            localStorage.setItem('results', JSON.stringify(this.results))
        }
    },
    getters: {
        resultsByCategory: (state: IState) => {
            return (category: string) => {
                if (category === 'Все') {
                    return state.results
                } else {
                    return state.results.filter(item => item.category === category)
                }
            }
        },
    }
})
