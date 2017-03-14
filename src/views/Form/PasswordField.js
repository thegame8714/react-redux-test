import React from 'react'

export default class PasswordField extends React.Component {

    render() {
        const {
            type
        } = this.props

        return (
            <div> 
                <input type={type} />
            </div>
        )
    }
    
}