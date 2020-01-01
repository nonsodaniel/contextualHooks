import React, { Component } from 'react'
import { ThemeContext } from '../../contexts/ThemeContexts'



export default class ThemeToggle extends Component {


    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { toggleTheme } = context
                return (
                    <button className="btn btn-primary" onClick={toggleTheme}>Toggle</button>
                )
            }}

            </ThemeContext.Consumer>
        )
    }

}

