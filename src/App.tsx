import React, {lazy, Suspense, useLayoutEffect} from "react"
import {connect} from "react-redux"
import Loading from "Atom/Loading"
import {fetchUser} from "Action/userActions/fetchUser"
import styled, {DefaultTheme, ThemeProvider} from "styled-components"
import {changeTheme} from "Action/themeActions/changeTheme"
import {State} from "Type/store"
import palette, {base} from "Util/theme";
import Overlay from 'Atom/Overlay'

const StyledApp = styled.div`
    min-height: 100vh;
    height: 100vh;
    background-color: ${p => p.theme['200']};
`

interface Props {
    changeTheme: (color: string) => void
    currentTheme: string
    user: any
    theme: DefaultTheme
    fetchUser: () => void
}

const Dashboard = lazy(() => import('./components/Dashboard'))
const SignIn = lazy(() => import('./components/SignIn'))
const Footer = lazy(() => import('./components/Footer'))

const App: React.FC<Props> = ({changeTheme, currentTheme, user, theme, fetchUser}) => {
    useLayoutEffect(() => {
        fetchUser()
        setTheme()
    }, [])

    const setTheme = () => {
        const colorsList = Object.keys(palette)
        if (!localStorage.getItem("color") || !colorsList.includes(localStorage.getItem("color"))) {
            localStorage.setItem("color", currentTheme)
        } else {
            const color = localStorage.getItem("color");
            changeTheme(color)
        }
    }

    if (user === null) {
        return (
            <ThemeProvider theme={theme}>
                <StyledApp>
                    <Loading color={theme['800']} dimension={60} />
                </StyledApp>
            </ThemeProvider>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={base}>
                <StyledApp>
                    <Overlay>
                        {user === "None" ? (
                            <Suspense fallback={<Loading color={theme['800']} dimension={60} />}>
                                <SignIn />
                                <Footer />
                            </Suspense>
                        ) : (
                            <Suspense fallback={<Loading color={theme['800']} dimension={60} />}>
                                <Dashboard />
                            </Suspense>
                        )}
                    </Overlay>
                </StyledApp>
            </ThemeProvider>
        </ThemeProvider>
    )
}

const mapStateToProps = (state: State) => ({
    user: state.user,
    theme: state.theme.palette,
    currentTheme: state.theme.color
})

export default connect(mapStateToProps, {fetchUser, changeTheme})(App)
