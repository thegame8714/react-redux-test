import apiClient from './apiClient'

xdescribe('apiClient', () => {
    describe('fetchData function', () => {
        it('should ovrewrite the default params', () => {
            const myApiClient = new apiClient()

            const params = {
                verb: "POST",
                url: "http://thisisatest.test",
                data: {
                    foo: "bar"
                },
                token: "IWishICouldHaveOne"
            }

            expect(myApiClient.fetchData(params)).toEqual(params)
        })
    })
})