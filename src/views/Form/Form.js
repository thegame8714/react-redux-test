import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PasswordField from './PasswordField'
// import { action as accountActions } from '../../redux/modules/account/actionCreators'
// import AccountActions from '../../components/AccountActions/AccountActions'

const validate = (values) => {
    console.log(values)
    return {}
}

export class Form extends React.Component {

    // static propTypes = {
    //     retrieveAccountInfo: React.PropTypes.func,
    //     topUpAccount: React.PropTypes.func,
    //     withdrawAccount: React.PropTypes.func,
    //     account: React.PropTypes.object,
    //     isLoadingAccount: React.PropTypes.bool
    // }

    // componentDidMount() {
    //     this.props.retrieveAccountInfo()
    // }

    // updateAccountStatus() {
    //     this.props.toggleAccountStatus()
    // }

    // topUpAccount() {
    //     this.props.topUpAccount()
    // }

    // withdrawAccount() {
    //     this.props.withdrawAccount()
    // }

    render() {
        // const {
        //     account,
        //     isLoadingAccount 
        // } = this.props

        return (
           <form>
            <Field
                type="password"
                name="password"
                component={PasswordField} 
            /> 
           </form>
        )
    }
} 


const form = reduxForm({
    form: 'TestForm',
    validate
})(Form)

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps, {
})(form)