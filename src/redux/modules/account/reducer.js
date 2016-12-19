import { SAVE_ACCOUNT_INFO,
         LOAD_ACCOUNT, 
         TOGGLE_ACCOUNT_STATUS,
         TOP_UP_ACCOUNT,
         WITHDRAW_ACCOUNT } from './actionCreators'

const DEFAULT_STATE = {
    isLoadingAccount: true,
    account: {}
}

const reducers = {
    [SAVE_ACCOUNT_INFO]: (state = DEFAULT_STATE, action) => {
        return {
            ...state,
            account: action.account,
            isLoadingAccount: false
        }
    },
    [LOAD_ACCOUNT]: (state = DEFAULT_STATE, action) => {
        return {
            ...state,
            isLoadingAccount: true
        }
    },
    [TOGGLE_ACCOUNT_STATUS]: (state = DEFAULT_STATE, action) => {
        const account = state.account
        return {
            ...state,
            account: {
                ...account,
                active: action.accountStatus
            }
        }
    },
    [TOP_UP_ACCOUNT]: (state = DEFAULT_STATE, action) => {
        const amount = parseFloat(state.account.amount.amount) + 100000
        return {
            ...state,
            account: {
                ...state.account,
                amount: {
                    ...state.account.amount,
                    amount: amount.toFixed(2)
                }
            }
        }
    },
    [WITHDRAW_ACCOUNT]: (state = DEFAULT_STATE, action) => {
        const amount = parseFloat(state.account.amount.amount) - 100000
        return {
            ...state,
            account: {
                ...state.account,
                amount: {
                    ...state.account.amount,
                    amount: amount.toFixed(2)
                }
            }
        }
    }

}

export default (state = DEFAULT_STATE, action) => {
  const {
    type
  } = action

  if (reducers[type]) {
    return reducers[type](state, action)
  }

  return state
}