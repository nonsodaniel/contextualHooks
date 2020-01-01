import React, { Component } from 'react'
import { ThemeContext } from '../../contexts/ThemeContexts'
import { AuthContext } from '../../contexts/AuthContexts'

class Navbar extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(themeContext) => (
                <AuthContext.Consumer>{(authContext) => {
                    const { isLightTheme, light, dark } = themeContext;
                    const { toggleAuth, isAuthenticated } = authContext
                    const theme = isLightTheme ? light : dark;
                    console.log(authContext)
                    return (
                        <nav style={{ background: theme.ui, color: theme.syntax }}>
                            <h1>Context app</h1>
                            <b className="text-danger text-center"> {isAuthenticated ? "Logged In" : "Logged out"} </b>
                            <button className="btn btn-danger" onClick={toggleAuth}>Toggle authentication</button>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}</AuthContext.Consumer>
            )}</ThemeContext.Consumer>
        )
    }
}


export default Navbar