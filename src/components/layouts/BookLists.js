import React, { Component } from 'react'
import { ThemeContext } from '../../contexts/ThemeContexts'
export default class BookLists extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>The way of Kings</li>
                    <li style={{ background: theme.ui }}>The name of the wind</li>
                    <li style={{ background: theme.ui }}>The final empire</li>
                </ul>
            </div>
        )
    }
}

// using context consumer

render(){
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return (
                <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                    <ul>
                        <li style={{ background: theme.ui }}>The way of Kings</li>
                        <li style={{ background: theme.ui }}>The name of the wind</li>
                        <li style={{ background: theme.ui }}>The final empire</li>
                    </ul>
                </div>
            )
        }}

        </ThemeContext.Consumer>
    )

}
