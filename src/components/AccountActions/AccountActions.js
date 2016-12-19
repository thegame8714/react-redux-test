import React from 'react'

export default class AccountActions extends React.Component {

    static propTypes = {
        amount: React.PropTypes.string,
        maxAmount: React.PropTypes.string,
        topUpAccount: React.PropTypes.func,
        withdrawAccount: React.PropTypes.func
    }

    topUpAccount() {
        this.props.topUpAccount()
    }

    withdrawAccount() {
        this.props.withdrawAccount()
    }


    render() {
        const {
            amount,
            maxAmount
        } = this.props

        return (
            <div className="account-actions">
                <button className="topUp button" onClick={this.topUpAccount.bind(this)} disabled={parseFloat(amount) >=  parseFloat(maxAmount) ? "disabled" : ""}>TOP UP $1000 ON ACCOUNT</button>
                <button className="withdraw button" onClick={this.withdrawAccount.bind(this)} disabled={parseFloat(amount) === 0 ? "disabled" : ""}>WITHDRAW $1000 FROM ACCOUNT</button>
            </div>
        )
            

    }

}