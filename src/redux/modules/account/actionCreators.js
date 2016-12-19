const data = {
    account: {
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
    }
}

export const SAVE_ACCOUNT_INFO = "SAVE_ACCOUNT_INFO"
function retrieveAccountInfo() {
    return (dispatch, getState) => {
        dispatch(loadAccount())
        const state = getState()
        if (Object.keys(state.account.account).length > 1) {
            return true
        }   
        dispatch(saveAccountInfo(data.account))
        return data.account
    }
}

function saveAccountInfo(account) {
    
    return {
        type: SAVE_ACCOUNT_INFO,
        account
    }
}

export const LOAD_ACCOUNT = "LOAD_ACCOUNT"
function loadAccount() {
    return {
        type: LOAD_ACCOUNT,
    }
}

function toggleAccountStatus() {
    return (dispatch, getState) => {
        const state = getState()
        return dispatch(toggleAccount(state.account.account.active))
    }
}

export const TOGGLE_ACCOUNT_STATUS = "TOGGLE_ACCOUNT_STATUS"
function toggleAccount(active) {
    return {
        type: TOGGLE_ACCOUNT_STATUS,
        accountStatus: !active
    }
}

function withdrawAccount() {
    return (dispatch,getState) => {
        return dispatch(withdraw())
    }
}

function topUpAccount() {
    return (dispatch,getState) => {
        return dispatch(topUp())
    }
}

export const TOP_UP_ACCOUNT = "TOP_UP_ACCOUNT"
export const WITHDRAW_ACCOUNT = "WITHDRAW_ACCOUNT"
function topUp() {
    return {
        type: TOP_UP_ACCOUNT
    }
}

function withdraw() {
    return {
        type: WITHDRAW_ACCOUNT
    }
}

export const action = { 
    retrieveAccountInfo,
    toggleAccountStatus,
    topUpAccount,
    withdrawAccount
}

export const reducerActions = {
    withdraw,
    topUp,
    toggleAccount,
    loadAccount,
    saveAccountInfo
}