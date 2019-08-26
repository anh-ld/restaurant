import React from "react"
import {connect} from "react-redux"
import {signInWithGoogle} from "../../actions/userActions/signIn"
import styled from "styled-components"
import Button from '../atom/Button'

const StyledSignInButton = styled(props => <Button {...props} />)`
    font-size: 1.5rem;
    padding: 0.5rem 0;
    width: 100%;
    background-color: ${p => p.theme['700']};
    color: #FFFFFF;
    line-height: 2rem;
    &:hover,
    &:active {
        background-color: ${p => p.theme['800']};
    }
`

interface Props {
    isSigningIn: boolean
    handleSignInClick: () => void
    signInWithGoogle: () => void
}

const SignInButton: React.FC<Props> = ({isSigningIn, handleSignInClick, signInWithGoogle}) => {
    const handleClick = () => {
        handleSignInClick()
        signInWithGoogle()
    }

    return (
        <StyledSignInButton onClick={handleClick}>
            {!isSigningIn ? "Sign in with Google" : "Signing in..."}
        </StyledSignInButton>
    )
}

export default connect(null, {signInWithGoogle})(SignInButton)
