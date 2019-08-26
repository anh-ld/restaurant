import React, {useLayoutEffect} from "react"
import {connect} from "react-redux"
import Loading from "./components/atom/Loading"
import {fetchUser} from "./actions/userActions/fetchUser"
import styled, {DefaultTheme, ThemeProvider} from "styled-components"
import {changeTheme} from "./actions/themeActions/changeTheme"
import {State} from "./types/store"
import Dashboard from './components/Dashboard'
import SignIn from './components/SignIn'
import Footer from './components/Footer'

const StyledApp = styled.div`
    min-height: 100vh;
    background-color: ${p => p.theme['0']};
`

interface Props {
    changeTheme: (color: string) => void
    currentTheme: string
    user: any
    theme: DefaultTheme
    fetchUser: () => void
}

const App: React.FC<Props> = ({changeTheme, currentTheme, user, theme, fetchUser}) => {
    useLayoutEffect(() => {
        fetchUser()
        setTheme()
    }, [])

    const setTheme = () => {
        const colors = ['blue', 'green', 'orange', 'red', 'yellow']
        if (!localStorage.getItem("color") || !colors.includes(localStorage.getItem("color"))) {
            localStorage.setItem("color", currentTheme)
        } else {
            const color = localStorage.getItem("color");
            changeTheme(color)
        }
    }

    if (user === null) {
        return (
            <ThemeProvider theme={theme}>
                <Loading/>
            </ThemeProvider>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <StyledApp>
                {user === "None" ? (
                    <div>
                        <SignIn/>
                        <Footer/>
                    </div>
                ) : (
                    <Dashboard/>
                )}
            </StyledApp>
        </ThemeProvider>
    )
}

const mapStateToProps = (state: State) => ({
    user: state.user,
    theme: state.theme.palette,
    currentTheme: state.theme.color
})

export default connect(mapStateToProps, {fetchUser, changeTheme})(App)
