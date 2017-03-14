import React, { Component } from 'react'

export default class FlagValue extends Component {

	static propTypes = {
		children: React.PropTypes.node,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.object
	}

	render () {
		let flagStyle = {
			borderRadius: 3,
			display: 'inline-block',
			marginRight: 10,
			position: 'relative',
			top: -2,
			verticalAlign: 'middle',
            backgroundColor: '#FF0000',
            width: '20px',
            height: '20px'
		}

		return (
			<div className="Select-value">
				<span className="Select-value-label">
					<div className="flag" style={flagStyle} />
					{this.props.children}
				</span>
			</div>
		);
	}
}