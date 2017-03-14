import React, { Component } from 'react'

export default class FlagOption extends Component {

    static propTypes = {
		children: React.PropTypes.node,
		className: React.PropTypes.string,
		isDisabled: React.PropTypes.bool,
		isFocused: React.PropTypes.bool,
		isSelected: React.PropTypes.bool,
		onFocus: React.PropTypes.func,
		onSelect: React.PropTypes.func,
		option: React.PropTypes.object.isRequired,
	}

	handleMouseDown (event) {
		event.preventDefault()
		event.stopPropagation()
		this.props.onSelect(this.props.option, event)
	}

	handleMouseEnter (event) {
		this.props.onFocus(this.props.option, event)
	}

	handleMouseMove (event) {
		if (this.props.isFocused) return
		this.props.onFocus(this.props.option, event)
	}

	render () {
		let flagStyle = {
			borderRadius: 3,
			display: 'inline-block',
			marginRight: 10,
			position: 'relative',
			top: -2,
			verticalAlign: 'middle',
            backgroundColor: '#000',
            width: '20px',
            height: '20px'
		}

        console.log(this.props)
		return (
			<div className={this.props.className}
				onMouseDown={this.handleMouseDown.bind(this)}
				onMouseEnter={this.handleMouseEnter.bind(this)}
				onMouseMove={this.handleMouseMove.bind(this)}
				title={this.props.option.title}>
				<div className="flag" style={flagStyle} />
				{this.props.children}
			</div>
		)
	}
}