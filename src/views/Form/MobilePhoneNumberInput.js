import React, { Component } from 'react'

export default class MobilePhoneNumberSelect extends Component {
    
    static propTypes = {
        countries: React.PropTypes.array,
        selectedCountryCode: React.PropTypes.string
    }
    retrieveValue(countries, selectedCountryCode, currentPhoneNumber) {
        const dialCode = this.retrieveDialCode(countries, selectedCountryCode)

        if(dialCode && !currentPhoneNumber) {
            return dialCode + ' '
        }
        return currentPhoneNumber
    }

    retrieveDialCode(countries, selectedCountryCode) {
         const selectedCountry = countries.find((country) => {
            return country.isoCode === selectedCountryCode
        })

        if (selectedCountry) {
            return selectedCountry.dialCode
        }

        return ''
    }

    render() {
        
        const {
            input,
            selectedCountryCode,
            currentPhoneNumber,
            countries
        } = this.props

        return (
                <input type="text" value={this.retrieveValue(countries, selectedCountryCode, currentPhoneNumber)} onChange={input.onChange} />
        )
    }

}