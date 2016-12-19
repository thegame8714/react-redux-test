import { action as accountActions, reducerActions,
         SAVE_ACCOUNT_INFO,
         LOAD_ACCOUNT, 
         TOGGLE_ACCOUNT_STATUS,
         TOP_UP_ACCOUNT,
         WITHDRAW_ACCOUNT } from './actionCreators'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('reducerActions', () => {
    describe('topUp', () => {
        it('should create an action to topup the account', () => {
            const expectedAction = {
                type: TOP_UP_ACCOUNT
            }

            expect(reducerActions.topUp()).toEqual(expectedAction)
        })
    })

    describe('withdraw', () => {
        it('should create an action to withdraw the account', () => {
            const expectedAction = {
                type: WITHDRAW_ACCOUNT
            }

            expect(reducerActions.withdraw()).toEqual(expectedAction)
        })
    })


    describe('toggleAccount', () => {
        it('should create an action to activate the account', () => {
            const active = false
            const expectedAction = {
                type: TOGGLE_ACCOUNT_STATUS,
                accountStatus: true
            }

            expect(reducerActions.toggleAccount(active)).toEqual(expectedAction)
        })

        it('should create an action to deactivate the account', () => {
            const active = true
            const expectedAction = {
                type: TOGGLE_ACCOUNT_STATUS,
                accountStatus: false
            }

            expect(reducerActions.toggleAccount(active)).toEqual(expectedAction)
        })
    })

    describe('loadAccount', () => {
        it('should create an action to set the flag that load the account', () => {
            const expectedAction = {
                type: LOAD_ACCOUNT,
            }

            expect(reducerActions.loadAccount()).toEqual(expectedAction)
        })
    })

    describe('saveAccountInfo', () => {
        it('should create an action to save the account', () => {
            const account = {
                foo: "bar"
            }
            const expectedAction = {
                type: SAVE_ACCOUNT_INFO,
                account: {
                    foo: "bar"
                }
            }

            expect(reducerActions.saveAccountInfo(account)).toEqual(expectedAction)
        })
    })

})

describe('accountActions', () => {
    describe('retrieveAccountInfo', () => {
        it('creates SAVE_ACCOUNT_INFO after having loaded the account', () => {
            const expectedActions = [
                {type: LOAD_ACCOUNT},
                {type: SAVE_ACCOUNT_INFO, account: {
                    id: "000001",
                    holder: {
                        first_name: "Fabio",
                        last_name: "Salimbeni"
                    },
                    amount: {
                        amount: "1000000.00",
                        currency: "USD"
                    },
                    active: true
                }}
            ]

            const store = mockStore({ account: {account: {}} })
            store.dispatch(accountActions.retrieveAccountInfo())

            expect(store.getActions()).toEqual(expectedActions)
        })

        it('does not creates SAVE_ACCOUNT_INFO after having loaded the account', () => {
            const expectedActions = [
                {type: LOAD_ACCOUNT}
            ]

            const store = mockStore({ account: {account: {
                    id: "000001",
                    holder: {
                        first_name: "Fabio",
                        last_name: "Salimbeni"
                    },
                    amount: {
                        amount: "1000000",
                        currency: "USD"
                    },
                    active: true
                }} })
            store.dispatch(accountActions.retrieveAccountInfo())

            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    describe('toggleAccountStatus', () => {
        it('creates TOGGLE_ACCOUNT_STATUS action', () => {
            const expectedActions = [
                {type: TOGGLE_ACCOUNT_STATUS, accountStatus: true},
            ]

            const store = mockStore({ account: {account: {}} })
            store.dispatch(accountActions.toggleAccountStatus(false))

            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    describe('topUpAccount', () => {
        it('creates TOP_UP_ACCOUNT action', () => {
            const expectedActions = [
                {type: TOP_UP_ACCOUNT},
            ]

            const store = mockStore({ account: {account: {}} })
            store.dispatch(accountActions.topUpAccount())

            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    describe('withdrawAccount', () => {
        it('creates WITHDRAW_ACCOUNT action', () => {
            const expectedActions = [
                {type: WITHDRAW_ACCOUNT},
            ]

            const store = mockStore({ account: {account: {}} })
            store.dispatch(accountActions.withdrawAccount())

            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})