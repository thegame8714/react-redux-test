import React, { Component } from 'react'
import logo from '../../../static/logo.svg'
import Menu from '../../components/Menu/Menu'
import './App.css'

class App extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  render() {

    const {
      children
    } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <Menu />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {children}
        </div>
      </div>
    );
  }
}

export default App
