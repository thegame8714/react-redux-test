import React from 'react'
import { Link } from 'react-router'
import './Menu.css'

export default class Menu extends React.Component {

    constructor() {
        super()

        this.menuItems = [
            {link: "/", label: "Home"},
            {link: "/account", label: "Account"}
        ]
    }

    renderMenuItems() {
        return this.menuItems.map((item, index) => {
            return <li key={index}><Link to={item.link}>{item.label}</Link></li>
        })
    }

    render() {

        return (
            <div className="main-menu">
                <ul>
                    {this.renderMenuItems()}
                </ul>
            </div>
        )
    }

}