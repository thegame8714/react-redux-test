// import axios from axios

export default class apiClient {

    constructor() {
        this.defaultParams = {
            verb: 'GET',
            url: '',
            data: null,
            token: null
        }
    }

    fetchData(params) {
        let apiClientParams = {
            ...this.params,
            ...params
        }

        console.log(apiClientParams)

        return apiClientParams
    }

}