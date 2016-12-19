import { SAVE_ACCOUNT_INFO,
         LOAD_ACCOUNT, 
         TOGGLE_ACCOUNT_STATUS,
         TOP_UP_ACCOUNT,
         WITHDRAW_ACCOUNT } from './actionCreators'
import reducer from './reducer'

describe('Account reducer', () => {
    it('should return the DEFAULT_STATE', () => {
        expect(reducer(undefined, {})).toEqual({
            isLoadingAccount: true,
            account: {}
        })
    })

    it('should handle SAVE_ACCOUNT_INFO', () => {
        expect(reducer(undefined, {
            type: SAVE_ACCOUNT_INFO,
            account: {
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
            }
        })).toEqual({
            isLoadingAccount: false,
            account: {
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
            }
        })
    })

    it('should handle LOAD_ACCOUNT', () => {
        expect(reducer(undefined, {
            type: LOAD_ACCOUNT
        })).toEqual({
            isLoadingAccount: true,
            account: {}
        })
    })

    it('should handle TOGGLE_ACCOUNT_STATUS', () => {
        expect(reducer({account: {
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
        }}, {
            type: TOGGLE_ACCOUNT_STATUS,
            accountStatus: false
        })).toEqual({
            account: {
                id: "000001",
                holder: {
                    first_name: "Fabio",
                    last_name: "Salimbeni"
                },
                amount: {
                    amount: "1000000",
                    currency: "USD"
                },
                active: false
            }
        })
    })

    it('should handle TOP_UP_ACCOUNT', () => {
        expect(reducer({account: {
                id: "000001",
                holder: {
                    first_name: "Fabio",
                    last_name: "Salimbeni"
                },
                amount: {
                    amount: "0",
                    currency: "USD"
                },
                active: false
        }}, {
            type: TOP_UP_ACCOUNT
        })).toEqual({
            account: {
                id: "000001",
                holder: {
                    first_name: "Fabio",
                    last_name: "Salimbeni"
                },
                amount: {
                    amount: "100000.00",
                    currency: "USD"
                },
                active: false
            }
        })
    })

    it('should handle WITHDRAW_ACCOUNT', () => {
        expect(reducer({account: {
                id: "000001",
                holder: {
                    first_name: "Fabio",
                    last_name: "Salimbeni"
                },
                amount: {
                    amount: "100000",
                    currency: "USD"
                },
                active: false
        }}, {
            type: WITHDRAW_ACCOUNT
        })).toEqual({
            account: {
                id: "000001",
                holder: {
                    first_name: "Fabio",
                    last_name: "Salimbeni"
                },
                amount: {
                    amount: "0.00",
                    currency: "USD"
                },
                active: false
            }
        })
    })

})