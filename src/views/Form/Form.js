import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import MobilePhoneNumberInput from './MobilePhoneNumberInput'
import MobilePhoneNumberSelect from './MobilePhoneNumberSelect'
import DesktopPhoneNumberSelect from './DesktopPhoneNumberSelect'


const validate = (values) => {

    return {}
}

export class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            isMobile: window.innerWidth < 500
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.isMobile.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.isMobile.bind(this))
    }

   isMobile() {
    this.setState({
        isMobile: window.innerWidth < 500
    })  
   }
    render() { 
        
        const {
            selectedCountryCode,
            currentPhoneNumber
        } = this.props

        return (
           <form>
            <Field
                name="phoneCountryCode"
                component={this.state.isMobile ? MobilePhoneNumberSelect : DesktopPhoneNumberSelect} 
                countries={[
                    {
                        name: 'Italy',
                        dialCode: '+39',
                        isoCode: 'it'
                    },
                    {
                        name: 'United Kingdom',
                        dialCode: '+44',
                        isoCode: 'en'
                    },
                    {
                        name: 'United States of America',
                        dialCode: '+1',
                        isoCode: 'us'
                    },
                ]}
                selectedCountryCode={selectedCountryCode}
            /> 
            <Field
                name="phoneNumber"
                component={MobilePhoneNumberInput}               
                selectedCountryCode={selectedCountryCode}
                currentPhoneNumber={currentPhoneNumber}
                countries={[
                    {
                        name: 'Italy',
                        dialCode: '+39',
                        isoCode: 'it'
                    },
                    {
                        name: 'United Kingdom',
                        dialCode: '+44',
                        isoCode: 'en'
                    },
                    {
                        name: 'United States of America',
                        dialCode: '+1',
                        isoCode: 'us'
                    },
                ]}
             />
           </form>
        )
    }
} 


const form = reduxForm({
    form: 'TestForm',
    validate
})(Form)

const mapStateToProps = (state) => {
    let phoneCountryCode = ''
    let phoneNumber = ''
    if ('TestForm' in state.form) {
        if ('values' in state.form.TestForm) {
            phoneCountryCode = state.form.TestForm.values.phoneCountryCode
            phoneNumber = state.form.TestForm.values.phoneNumber
        }
    }
    return {
        selectedCountryCode: phoneCountryCode,
        currentPhoneNumber: phoneNumber
    }
} 

export default connect(mapStateToProps, {})(form)