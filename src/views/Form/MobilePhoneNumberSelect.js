import React, { Component } from 'react'

export default class MobilePhoneNumberSelect extends Component {

    static propTypes = {
        countries: React.PropTypes.array
    }

    render() {
        
        const {
            input,
            countries,          
            selectedCountryCode

        } = this.props

        return (
            <div>
                <select onChange={input.onChange} value={selectedCountryCode}>
                    <option value="">Select country</option>
                    {
                        countries.map((country, index) => {
                            return (
                                <option value={country.isoCode} key={index}>{country.name}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }

}