import React, { Component } from 'react'
import { ThemeContext } from '../../contexts/ThemeContexts'



export default class ThemeToggle extends Component {

    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { toggleTheme } = context;
                return (
                    <div>
                        <button onClick={toggleTheme}>toggle</button>
                    </div>
                )
            }}

            </ThemeContext.Consumer>
        )


    }

}

