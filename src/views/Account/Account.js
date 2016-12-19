import React from 'react'
import { connect } from 'react-redux'
import { action as accountActions } from '../../redux/modules/account/actionCreators'
import AccountActions from '../../components/AccountActions/AccountActions'
import './Account.css'

export class Account extends React.Component {

    static propTypes = {
        retrieveAccountInfo: React.PropTypes.func,
        topUpAccount: React.PropTypes.func,
        withdrawAccount: React.PropTypes.func,
        account: React.PropTypes.object,
        isLoadingAccount: React.PropTypes.bool
    }

    componentDidMount() {
        this.props.retrieveAccountInfo()
    }

    updateAccountStatus() {
        this.props.toggleAccountStatus()
    }

    topUpAccount() {
        this.props.topUpAccount()
    }

    withdrawAccount() {
        this.props.withdrawAccount()
    }

    render() {
        const {
            account,
            isLoadingAccount 
        } = this.props

        return (
            <div className="account">
                {isLoadingAccount ? <div className="loader">Account loading....</div> :
                <span className="left-column">
                    <div className="account-item">
                        <div className="label">Account holder:</div> {account.holder.first_name} {account.holder.last_name}
                    </div>
                    <div className="account-item">
                        <div className="label">Amount available in the account:</div> {account.amount.currency === "USD" ? "$" : ""}{account.amount.amount}
                        {account.active && 
                        <AccountActions 
                            amount={account.amount.amount} 
                            maxAmount="10000000"
                            topUpAccount={this.topUpAccount.bind(this)}
                            withdrawAccount={this.withdrawAccount.bind(this)} />
                        }
                    </div>
                    <div className="account-item">
                        <div className="label">Account status:</div> {account.active ? <span className="active">ENABLED</span> : <span className="inactive">DISABLED</span>}</div>
                    <button className="toggleStatus button" onClick={this.updateAccountStatus.bind(this)}>{account.active ? "DISABLE ACCOUNT" : "ENABLE ACCOUNT"}</button>
                </span>
            }            
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return {
        account: state.account.account,
        isLoadingAccount: state.account.isLoadingAccount
    }
}

export default connect(mapStateToProps, {
    retrieveAccountInfo: accountActions.retrieveAccountInfo,
    toggleAccountStatus: accountActions.toggleAccountStatus,
    topUpAccount: accountActions.topUpAccount,
    withdrawAccount: accountActions.withdrawAccount
})(Account)