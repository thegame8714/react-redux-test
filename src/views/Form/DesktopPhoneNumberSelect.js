import React, { Component } from 'react'
import Select from 'react-select'
import FlagOption from './FlagOption'
import FlagValue from './FlagValue'

export default class DesktopPhoneNumberSelect extends Component {


    static propTypes = {
        countries: React.PropTypes.array
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.selectedCountryCode
        }
    }

	setValue (value) {
        this.props.input.onChange(value.value)
		this.setState({ value })
	}

    render() {
        
        const placeholder = <span>&#9786; Select Country</span>
        const {
            countries
        } = this.props


		return (
			<div className="section">
				<Select
					onChange={this.setValue.bind(this)}
					options={[
                        { value: 'en', label: '+44'},
                        { value: 'it', label: '+39' },
                        { value: 'us', label: '+1' }
                    ]}
                    optionComponent={FlagOption}
					placeholder={placeholder}
					value={this.state.value}
                    valueComponent={FlagValue}
					/>
			</div>
		)
    }

}